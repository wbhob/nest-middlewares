# Nest Middlewares - Connect Timeout

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [connect-timeout](http://www.npmjs.com/package/connect-timeout).

## Installation

`@nest-middlewares/connect-timeout` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/connect-timeout
```

## Usage

```ts
import { ConnectTimeoutMiddleware } from '@nest-middlewares/connect-timeout';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ConnectTimeoutMiddleware).forRoutes( /* your routes */ );
    }
}
```
