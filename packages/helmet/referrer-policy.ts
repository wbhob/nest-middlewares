import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as helmet from 'helmet';

@Injectable()
export class HelmetReferrerPolicyMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetReferrerPolicyConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetReferrerPolicyConfiguration;

    public resolve(...args: any[]): RequestHandler {
        if (HelmetReferrerPolicyMiddleware.options) {
            return helmet.referrerPolicy(HelmetReferrerPolicyMiddleware.options);
        } else {
            return helmet.referrerPolicy();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
