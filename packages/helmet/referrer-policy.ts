import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetReferrerPolicyMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetReferrerPolicyConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetReferrerPolicyConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetReferrerPolicyMiddleware.options) {
            helmet.referrerPolicy(HelmetReferrerPolicyMiddleware.options)(req, res, next);
        } else {
            helmet.referrerPolicy()(req, res, next);
        }
    }
}
