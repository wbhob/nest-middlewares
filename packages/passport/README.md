# Nest Middlewares - Cookie Parser

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [passport](http://www.npmjs.com/package/passport).

## Installation

`@nest-middlewares/passport` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/passport
```

## Usage

```ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PassportInitializeMiddleware, PassportSessionMiddleware } from '@nest-middlewares/passport';
import { AppController } from './app.controller';

@Module(...)
export class AppModule implements NestModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer
        	.apply(PassportInitializeMiddleware)
        	.forRoutes(AppController)
        	.apply(PassportSessionMiddleware)
        	.forRoutes(AppController)
    }
}
```
