import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetContentSecurityPolicyMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetContentSecurityPolicyConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetContentSecurityPolicyConfiguration;

    public resolve(...args: any[]) {
        if (HelmetContentSecurityPolicyMiddleware.options) {
            return helmet.contentSecurityPolicy(HelmetContentSecurityPolicyMiddleware.options);
        } else {
            throw new Error(
                'HelmetContentSecurityPolicyMiddleware requires you'
                + ' to call `configure` before injection to set CSP options.');
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
