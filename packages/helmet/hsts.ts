import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHstsMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHstsConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHstsConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetHstsMiddleware.options) {
            helmet.hsts(HelmetHstsMiddleware.options)(req, res, next);
        } else {
            helmet.hsts()(req, res, next);
        }
    }
}
