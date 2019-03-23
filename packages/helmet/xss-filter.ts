import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetXssFilterMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetXssFilterConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetXssFilterConfiguration;

    public resolve(...args: any[]) {
        if (HelmetXssFilterMiddleware.options) {
            return helmet.xssFilter();
        } else {
            return helmet.xssFilter();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
