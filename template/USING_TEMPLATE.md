Thanks for contributing to Nest Middlewares! This document outlines the best practice for adding your own middleware of choice.

1. Duplicate the `tpl` folder and move it into `src`.
1. Rename `tpl` to the **exact** name of the middleware as it is on NPM. For example, for Helmet, use `helmet`, or for `body-parser`, use `body-parser`.
1. In `package.json`, rename the `name` property to `@nest-middlewares/MIDDLEWARE_NAME`, where MIDDLEWARE_NAME is the same name as the middleware on NPM. Also, be sure to change the name of `Middleware` in the description field of `package.json`.
1. `npm install` the types for your middleware in the root folder (for example, `npm install --save-dev @types/helmet`). Make sure they are saved to `devDependencies` of the root package.json.
1. `cd` into your newly created middleware folder, and `npm install` the package containing the middleware and save it to `package.json` (for example, `npm install --save helmet`).
1. In `index.ts`, change all the instances of "middleware" to what they should logically be named, maintaining capitalization. Check out [CONTRIBUTING.md](../CONTRIBUTING.md) for clarification.
1. Write tests as necessary for your middleware.
1. Run `sh ./scripts/build.sh` and make sure that no errors arise.
1. Run `lerna clean && lerna bootstrap` and make sure no errors arise.
1. 🎉 Congratulations! You've made a middleware! File a pull request, and sit back and look at your great work.
