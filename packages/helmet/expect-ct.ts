import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetExpectCtMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetExpectCtConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetExpectCtConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetExpectCtMiddleware.options) {
            helmet.expectCt(HelmetExpectCtMiddleware.options)(req, res, next);
        } else {
            helmet.expectCt()(req, res, next);
        }
    }
}
