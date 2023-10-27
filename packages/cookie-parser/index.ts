import { Injectable, NestMiddleware } from '@nestjs/common';
import cookieParser from 'cookie-parser';

@Injectable()
export class CookieParserMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(secret: string | string[], opts?: cookieParser.CookieParseOptions) {
        this.secret = secret;
        if (opts) {
            this.options = opts;
        }
    }

    private static secret: string | string[];
    private static options: cookieParser.CookieParseOptions;

    public use(req: any, res: any, next: any) {
        if (CookieParserMiddleware.secret) {
            cookieParser(CookieParserMiddleware.secret, CookieParserMiddleware.options)(req, res, next);
        } else {
            cookieParser()(req, res, next);
        }
    }
}
