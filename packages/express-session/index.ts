import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as expressSession from 'express-session';

@Injectable()
export class ExpressSessionMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: expressSession.SessionOptions) {
        this.options = opts;
    }

    private static options: expressSession.SessionOptions;

    public resolve(...args: any[]): MiddlewareFunction {
        if (ExpressSessionMiddleware.options) {
            return expressSession(ExpressSessionMiddleware.options);
        } else {
            return expressSession();
        }
    }
}
