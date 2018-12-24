# Nest Middlewares - Morgan

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [morgan](http://www.npmjs.com/package/morgan).

## Installation

`@nest-middlewares/morgan` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/morgan
```

## Usage

```ts
import { MorganMiddleware } from '@nest-middlewares/morgan';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        MorganMiddleware.configure( /* options as per morgan docs */ )
        consumer.apply(MorganMiddleware).forRoutes( /* your routes */ );
    }
}
```
