import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetDnsPrefetchControlMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetDnsPrefetchControlConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetDnsPrefetchControlConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetDnsPrefetchControlMiddleware.options) {
            helmet.dnsPrefetchControl(HelmetDnsPrefetchControlMiddleware.options)(req, res, next);
        } else {
            helmet.dnsPrefetchControl()(req, res, next);
        }
    }
}
