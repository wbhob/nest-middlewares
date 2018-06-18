import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as bearerToken from 'express-bearer-token';

@Injectable()
export class ExpressBearerTokenMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: bearerToken.Options) {
        this.options = opts;
    }

    private static options: bearerToken.Options;

    public resolve(...args: any[]): RequestHandler {
        if (ExpressBearerTokenMiddleware.options) {
            return bearerToken(ExpressBearerTokenMiddleware.options);
        } else {
            return bearerToken();
        }
    }
}
