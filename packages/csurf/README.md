# Nest Middlewares - CSURF

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [csurf](http://www.npmjs.com/package/csurf).

## Installation

`@nest-middlewares/csurf` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/csurf
```

## Usage

```ts
import { CsurfMiddleware } from '@nest-middlewares/csurf';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(CsurfMiddleware).forRoutes( /* your routes */ );
    }
}
```
