import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bearerToken from 'express-bearer-token';

@Injectable()
export class ExpressBearerTokenMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: bearerToken.BearerTokenOptions) {
        this.options = opts;
    }

    private static options: bearerToken.Options;

    public resolve(...args: any[]) {
        if (ExpressBearerTokenMiddleware.options) {
            return bearerToken(ExpressBearerTokenMiddleware.options);
        } else {
            return bearerToken();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
