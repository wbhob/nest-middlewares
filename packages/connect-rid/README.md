# Nest Middlewares - Connect RID

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [connect-rid](http://www.npmjs.com/package/connect-rid).

## Installation

`@nest-middlewares/connect-rid` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/connect-rid
```

## Usage

```ts
import { ConnectRidMiddleware } from '@nest-middlewares/connect-rid';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ConnectRidMiddleware).forRoutes( /* your routes */ );
    }
}
```
