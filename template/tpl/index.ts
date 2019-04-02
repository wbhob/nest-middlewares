import { Injectable, NestMiddleware } from '@nestjs/common';
import * as middleware from 'middleware';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: middleware.Options) {
        this.options = opts;
    }

    private static options: middleware.Options;

    public use(req: any, res: any, next: any) {
        if (MiddlewareMiddleware.options) {
            middleware(MiddlewareMiddleware.options)(req, res, next);
        } else {
            middleware()(req, res, next);
        }
    }
}
