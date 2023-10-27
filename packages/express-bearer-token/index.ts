import { Injectable, NestMiddleware } from '@nestjs/common';
import bearerToken from 'express-bearer-token';

@Injectable()
export class ExpressBearerTokenMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: bearerToken.BearerTokenOptions) {
        this.options = opts;
    }

    private static options: bearerToken.BearerTokenOptions;

    public use(req: any, res: any, next: any) {
        if (ExpressBearerTokenMiddleware.options) {
            bearerToken(ExpressBearerTokenMiddleware.options)(req, res, next);
        } else {
            bearerToken()(req, res, next);
        }
    }
}
