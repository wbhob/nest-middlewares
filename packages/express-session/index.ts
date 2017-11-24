import * as expressSession from 'express-session';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class ExpressSessionMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: expressSession.SessionOptions) {
        this.options = opts;
    }

    private static options: expressSession.SessionOptions;

    public resolve(...args: any[]): RequestHandler {
        if (ExpressSessionMiddleware.options) {
            return expressSession(ExpressSessionMiddleware.options);
        } else {
            return expressSession();
        }
    }
}
