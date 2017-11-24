import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetXssFilterMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetXssFilterConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetXssFilterConfiguration;


    public resolve(...args: any[]) {
        if (HelmetXssFilterMiddleware.options) {
            return helmet.xssFilter();
        } else {
            return helmet.xssFilter();
        }
    }
}
