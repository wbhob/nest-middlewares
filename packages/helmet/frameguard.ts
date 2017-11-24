import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetFrameguardMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetFrameguardConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetFrameguardConfiguration;


    public resolve(...args: any[]) {
        if (HelmetFrameguardMiddleware.options) {
            return helmet.frameguard(HelmetFrameguardMiddleware.options);
        } else {
            return helmet.frameguard();
        }
    }
}
