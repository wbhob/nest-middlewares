import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetHidePoweredByMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHidePoweredByConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHidePoweredByConfiguration;


    public resolve(...args: any[]) {
        if (HelmetHidePoweredByMiddleware.options) {
            return helmet.hidePoweredBy(HelmetHidePoweredByMiddleware.options);
        } else {
            return helmet.hidePoweredBy();
        }
    }
}
