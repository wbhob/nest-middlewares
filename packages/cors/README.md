# Nest Middlewares - CORS

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [cors](http://www.npmjs.com/package/cors).

## Installation

`@nest-middlewares/cors` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/cors
```

## Usage

```ts
import { CorsMiddleware } from '@nest-middlewares/cors';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(CorsMiddleware).forRoutes( /* your routes */ );
    }
}
```
