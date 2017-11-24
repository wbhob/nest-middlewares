# Nest Middlewares
Add the most common Express middlewares to your Nest app with one line.

### Usage
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


### Currently supports:
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
