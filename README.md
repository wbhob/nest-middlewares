[![Coverage Status](https://coveralls.io/repos/github/wbhob/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/wbhob/nest-middlewares?branch=master)
# Nest Middlewares
Add the most common Express middlewares to your Nest app with one line.

## System Requirements
This packages requires the following:
- Node.JS 8.0.0 or later
- @nestjs/core and @nestjs/common 6.0.0 or later

## Adding Middlewares
Please do not open issues asking to support a middleware – I've tried to make this project really easy to implement and extend. See CONTRIBUTING.md for more information on how to create a new middleware, and I'll merge and release it if it meets the contributing guidelines. Thank you for your contribution.

## Usage
Take the name of your favorite Express middleware and prefix it with `@nest-middlewares/`.
```
$ npm install --save @nest-middlewares/helmet
```
In your module:
```ts
import { HelmetMiddleware } from '@nest-middlewares/helmet'; // (look around in the source code for the exact class name)

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(HelmetMiddleware).forRoutes(
            /* your routes */
        );
    }
}
```


## Currently supports:
- **Compression**
- Connect RID
- Connect Timeout
- **Cookie Parser**
- Cookie Session
- **CORS**
- Csurf
- **Error Handler**
- **Helmet**
- Method Override
- **Morgan**
- Response Time
- Serve Favicon
- Serve Index
- Serve Static
- VHost
