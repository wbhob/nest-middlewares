import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetXssFilterMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetXssFilterConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetXssFilterConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetXssFilterMiddleware.options) {
            helmet.xssFilter()(req, res, next);
        } else {
            helmet.xssFilter()(req, res, next);
        }
    }
}
