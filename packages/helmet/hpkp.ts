import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHpkpMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHpkpConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHpkpConfiguration;

    public resolve(...args: any[]): RequestHandler {
        if (HelmetHpkpMiddleware.options) {
            return helmet.hpkp(HelmetHpkpMiddleware.options);
        } else {
            throw new Error('HPKP must be configured before injection using `configure`.');
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
