# Nest Middlewares - Compression

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [compression](http://www.npmjs.com/package/compression).

## Installation

`@nest-middlewares/compression` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/compression
```

## Usage

```ts
import { CompressionMiddleware } from '@nest-middlewares/compression';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(CompressionMiddleware).forRoutes( /* your routes */ );
    }
}
```
