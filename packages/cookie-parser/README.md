# Nest Middlewares - Cookie Parser

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [cookie-parser](http://www.npmjs.com/package/cookie-parser).

## Installation

`@nest-middlewares/cookie-parser` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/cookie-parser
```

## Usage

```ts
import { CookieParserMiddleware } from '@nest-middlewares/cookie-parser';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(CookieParserMiddleware).forRoutes( /* your routes */ );
    }
}
```
