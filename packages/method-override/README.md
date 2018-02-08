# Nest Middlewares - Method Override

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [method-override](http://www.npmjs.com/package/method-override).

## Installation

`@nest-middlewares/method-override` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/method-override
```

## Usage

```ts
import { MethodOverrideMiddleware } from '@nest-middlewares/method-override';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(MethodOverrideMiddleware).forRoutes( /* your routes */ );
    }
}
```
