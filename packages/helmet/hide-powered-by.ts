import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHidePoweredByMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHidePoweredByConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHidePoweredByConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetHidePoweredByMiddleware.options) {
            helmet.hidePoweredBy(HelmetHidePoweredByMiddleware.options)(req, res, next);
        } else {
            helmet.hidePoweredBy()(req, res, next);
        }
    }
}
