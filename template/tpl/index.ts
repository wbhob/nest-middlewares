import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as middleware from 'middleware';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: middleware.Options) {
        this.options = opts;
    }

    private static options: middleware.Options;

    public resolve(...args: any[]): MiddlewareFunction {
        if (MiddlewareMiddleware.options) {
            return middleware(MiddlewareMiddleware.options);
        } else {
            return middleware();
        }
    }
}
