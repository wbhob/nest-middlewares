# Nest Middlewares - VHost

[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [vhost](http://www.npmjs.com/package/vhost).

## Installation

`@nest-middlewares/vhost` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middlewares/vhost
```

## Usage

```ts
import { VhostMiddleware } from '@nest-middlewares/vhost';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(VhostMiddleware).forRoutes( /* your routes */ );
    }
}
```
