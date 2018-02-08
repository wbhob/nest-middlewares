# Nest Middlewares - Error Handler

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [errorhandler](http://www.npmjs.com/package/errorhandler).

## Installation

`@nest-middlewares/errorhandler` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/errorhandler
```

## Usage

```ts
import { ErrorHandlerMiddleware } from '@nest-middlewares/errorhandler';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ErrorHandlerMiddleware).forRoutes( /* your routes */ );
    }
}
```
