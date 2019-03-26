import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetContentSecurityPolicyMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetContentSecurityPolicyConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetContentSecurityPolicyConfiguration;

    public use(req: any, res: any, next: any) {
        if (HelmetContentSecurityPolicyMiddleware.options) {
            helmet.contentSecurityPolicy(HelmetContentSecurityPolicyMiddleware.options)(req, res, next);
        } else {
            throw new Error(
                'HelmetContentSecurityPolicyMiddleware requires you'
                + ' to call `configure` before injection to set CSP options.');
        }
    }
}
