# Nest Middlewares - Response Time

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [response-time](http://www.npmjs.com/package/response-time).

## Installation

`@nest-middlewares/response-time` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/response-time
```

## Usage

```ts
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ResponseTimeMiddleware).forRoutes( /* your routes */ );
    }
}
```
