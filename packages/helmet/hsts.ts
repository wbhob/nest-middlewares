import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHstsMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHstsConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHstsConfiguration;

    public resolve(...args: any[]): RequestHandler {
        if (HelmetHstsMiddleware.options) {
            return helmet.hsts(HelmetHstsMiddleware.options);
        } else {
            return helmet.hsts();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
