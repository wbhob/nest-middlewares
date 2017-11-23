import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetReferrerPolicyMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetReferrerPolicyConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetReferrerPolicyConfiguration;


    public resolve(...args: any[]) {
        if (HelmetReferrerPolicyMiddleware.options) {
            return helmet.referrerPolicy(HelmetReferrerPolicyMiddleware.options);
        } else {
            return helmet.referrerPolicy();
        }
    }
}
