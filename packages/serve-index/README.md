# Nest Middlewares - Serve Index

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [serve-index](http://www.npmjs.com/package/serve-index).

## Installation

`@nest-middlewares/serve-index` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/serve-index
```

## Usage

```ts
import { ServeIndexMiddleware } from '@nest-middlewares/serve-index';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        ServeIndexMiddleware.configure( /* options */ )
        consumer.apply(ServeIndexMiddleware).forRoutes( /* your routes */ );
    }
}
```
