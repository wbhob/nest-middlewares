## Contributing Guidelines for Nest Middlewares
Thanks for your intrest in contributing to Nest Middlewares. This is a great and easy way to give back to the Nest community if dabbling with the Nest Core seems a little bit daunting. This document outlines the guidelines for your contribution.

#### Table of Contents
1. [Definitions](#definitions)
1. [Style Guide](#style-guide)
1. [Commit Messages](#commit)

<a name="definitions">

## Definitions
These will be held to a high standard and will be scrutinized strictly. Please follow them to the best of your ability.

- ALWAYS indicates that you MUST follow this guideline, or your Pull Request will be rejected.
- CONSIDER indicates something you are ADVISED to do, unless you have a good reason not to. ALWAYS explain your reasoning in your Pull Request body.
- NEVER indicates something you MUST NOT do for any reason. If you break this, your Pull Request will be rejected.
- WHY? Answers questions to the previous guidelines.

- GOOD indicates a good example of the guideline.
- OK indicates a sufficient fulfilment of the guideline, but a `GOOD` example would be prefered.
- BAD indicates a bad example of the guideline.

<a name="style-guide">

## Style Guide
#### Folder Structure
ALWAYS use this folder structure
```
.
├── node_modules
├── scripts
├── packages
    └── your-middleware
        ├── index.ts
        ├── index.spec.ts
        └── package.json
└── template
```

NEVER commit built files or `node_modules`.
CONSIDER using the [template guide](./template/USING_TEMPLATE.md) to build your middleware.

ALWAYS put your middleware as a direct child of `src`.
ALWAYS have one `package.json` and one `index.ts` file for every middleware.
ALWAYS save the package and directory names as the middleware EXACTLY as it appears on NPM.
WHY? Keeping everything in `src` helps maintain the repository and keep code condensed.
WHY? Ensuring that all middlewares have the same folder structures makes it easy to contribute to a middleware without having to search around for the entry file, and reduces the possible errors with `package.json`.
WHY? Having the same package name makes it easy for other developers to find the middleware.
WHY? Most middlewares will have just one file, so having additional files creates headache and confusion.

#### Dependency Management

NEVER save `dependencies` to the root package.json, or save `devDependencies` to an individual middleware's `package.json`.
ALWAYS save package `dependencies` to its respective package, and save `devDependencies` to the root package.json.
ALWAYS keep `@nestjs/common@^5.0.0` as a peerDependency of EVERY middleware. This will be updated as Nest major versions are incremented.
WHY? The `lerna` tool and NPM will always install `dependencies` from child `package.json` files, but not `devDependencies`. To reduce clutter, only keep packages that middlewares DIRECTLY DEPEND ON in their respective `package.json` files.
WHY? Making sure that all middlewares have the same Nest dependency ensures consistency for consumers, and ensures the most possible users without breaking changes.

#### Naming

ALWAYS PascalCase the name of your middleware class.
ALWAYS end your middleware classnames with `Middleware`.
ALWAYS add additional description words between the middleware name and `Middleware` when providing additional middlewares (for example, `HelmetNoCacheMiddleware` or `HelmetFrameguardMiddleware`).
NEVER add additional prefixes or suffixes to the primary middleware classname.
NEVER abbreviate middleware class names.
WHY? Name consistencies make sure that developers consuming your middleware can quickly access the right class without fumbling through names.

GOOD - `HelmetMiddleware`
GOOD - `HelmetNoCacheMiddleware`
BAD - `helmet_middleware`, `helmetMiddleware`, or `HELMET_MIDDLEWARE`.
BAD - `MainHelmetMiddleware`
BAD - `HlmtMiddleware`, `HelmetMddlwre`, or `HelmetMw`
BAD - `NoCacheHelmetMiddleware`, `HelmetMiddlewareNoCache`, or `NoCacheMiddleware`

#### Additional Middlewares

CONSIDER moving middlewares with additional functionality to other files.
ALWAYS keep the core middleware in `index.ts`.
ALWAYS export non-core middlewares through `index.ts`.
ALWAYS name non-core files in kebob-case with no additional suffixes.
ALWAYS make sure that each file contains exactly ONE class.
CONSIDER containing all middlewares in `index.ts` for small middlewares (no more than THREE classes).
WHY? Separating out middleware class files ensures that `index.ts` does not get extremely cluttered.
WHY? Adding additional files for small middlewares is needless overhead, and would not cause a lot of developmental trouble. Any more than that can begin to cause confusion.

**File Names:**
GOOD - `no-cache.ts`
BAD - `helmet-no-cache.ts`
BAD - `no-cache.middleware.ts`
BAD - `no_cache.ts`, `nocache.ts`, `noCache.ts`, or `NO_CACHE.ts`

#### Middleware File Design

ALWAYS use the same name for the import for the package name. If the package name is hyphenated, use camelCase.
CONSIDER having exactly one method in each class, `resolve`.
ALWAYS implement the `NestMiddleware` interface.
ALWAYS use the shorthand factory whenever possible (for example, use `return helmet()` rather than `return (req, req, next) => helmet()(req, res, next)`).
ALWAYS decorate your middleware with `@Injectable()`.

GOOD - `import * as bodyParser from 'body-parser';`
BAD - `import * as BodyParser or body_parser or BODYPARSER from 'body-parser'`.

GOOD:

```ts
public resolve(...args: any[]) {
    return helmet();
}
```

BAD:

```ts
public resolve(...args: any[]) {
    return (req, res, next) => helmet()(req, res, next);
}
```

#### Miscellaneous Styles

ALWAYS use single quotation marks ('), not double (").
ALWAYS sort imports alphabetically.
ALWAYS use one space before and after the last named import (ex. `{ NestMiddleware }`);


## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the Angular change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

```
docs(changelog): update change log to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Scope
The scope should be the name of the middleware package affected (as perceived by person reading changelog generated from commit messages).

There are currently a few exceptions to the "use package name" rule:

* **packaging**: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.
* **template**: used to indicate changes made to any of the middleware template files
* none/empty string: useful for `style`, `test`, `chore`, and `refactor` changes that are done across all packages (e.g. `style: add missing semicolons`)

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].
