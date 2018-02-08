import { Middleware, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as helmet from 'helmet';

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
