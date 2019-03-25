import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {

    public static configure(opts: cors.CorsOptions) {
        this.options = opts;
    }

    private static options: cors.CorsOptions;

    public resolve(...args: any[]): RequestHandler {
        if (CorsMiddleware.options) {
            return cors(CorsMiddleware.options);
        }
        return cors();
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
