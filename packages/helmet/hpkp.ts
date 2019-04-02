import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHpkpMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHpkpConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHpkpConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetHpkpMiddleware.options) {
            helmet.hpkp(HelmetHpkpMiddleware.options)(req, res, next);
        } else {
            throw new Error('HPKP must be configured before injection using `configure`.');
        }
    }
}
