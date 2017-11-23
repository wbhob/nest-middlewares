import * as cookieSession from 'cookie-session';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class MiddlewareMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: cookieSession.CookieSessionOptions) {
        this.options = opts;
    }

    private static options: cookieSession.CookieSessionOptions;

    public resolve(...args: any[]) {
        if (MiddlewareMiddleware.options) {
            return cookieSession(MiddlewareMiddleware.options);
        } else {
            return cookieSession();
        }
    }
}
