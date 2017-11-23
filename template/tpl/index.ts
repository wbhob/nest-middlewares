import * as middleware from 'middleware';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class MiddlewareMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: middleware.Options) {
        this.options = opts;
    }

    private static options: middleware.Options;

    public resolve(...args: any[]): RequestHandler {
        if (MiddlewareMiddleware.options) {
            return middleware(MiddlewareMiddleware.options);
        } else {
            return middleware();
        }
    }
}
