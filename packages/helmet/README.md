# Nest Middlewares - Helmet

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [helmet](http://www.npmjs.com/package/helmet).

## Installation

`@nest-middlewares/helmet` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/helmet
```

## Usage

```ts
import { HelmetMiddleware } from '@nest-middlewares/helmet';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(HelmetMiddleware).forRoutes( /* your routes */ );
    }
}
```

The following classes are also available for more specialized imports:

- HelmetContentSecurityPolicyMiddleware
- HelmetDnsPrefetchControlMiddleware
- HelmetExpectCtMiddleware
- HelmetFrameguardMiddleware
- HelmetHidePoweredByMiddleware
- HelmetHpkpMiddleware
- HelmetHstsMiddleware
- HelmetIeNoOpenMiddleware
- HelmetNoCacheMiddleware
- HelmetNoSniffMiddleware
- HelmetReferrerPolicyMiddleware
- HelmetXssFilterMiddleware