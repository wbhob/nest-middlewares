import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetFrameguardMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetFrameguardConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetFrameguardConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetFrameguardMiddleware.options) {
            return helmet.frameguard(HelmetFrameguardMiddleware.options)(req, res, next);
        } else {
            return helmet.frameguard()(req, res, next);
        }
    }
}
