import { Injectable, NestMiddleware } from '@nestjs/common';
import expressSession from 'express-session';

@Injectable()
export class ExpressSessionMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: expressSession.SessionOptions) {
        this.options = opts;
    }

    private static options: expressSession.SessionOptions;

    public use(req: any, res: any, next: any) {
        if (ExpressSessionMiddleware.options) {
            expressSession(ExpressSessionMiddleware.options)(req, res, next);
        } else {
            expressSession()(req, res, next);
        }
    }
}
