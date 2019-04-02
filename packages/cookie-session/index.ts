import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cookieSession from 'cookie-session';

@Injectable()
export class CookieSessionMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: cookieSession.CookieSessionOptions) {
        this.options = opts;
    }

    private static options: cookieSession.CookieSessionOptions;

    public use(req: any, res: any, next: any) {
        if (CookieSessionMiddleware.options && CookieSessionMiddleware.options.keys) {
            cookieSession(CookieSessionMiddleware.options)(req, res, next);
        } else {
            throw new Error('You must pass in `keys` as an option to CookieSessionMiddleware');
        }
    }
}
