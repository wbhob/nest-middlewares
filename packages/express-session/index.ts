import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as expressSession from 'express-session';

@Injectable()
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

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
