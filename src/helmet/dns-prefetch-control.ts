import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetDnsPrefetchControlMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetDnsPrefetchControlConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetDnsPrefetchControlConfiguration;

    public resolve(...args: any[]) {
        if (HelmetDnsPrefetchControlMiddleware.options) {
            return helmet.dnsPrefetchControl(HelmetDnsPrefetchControlMiddleware.options);
        } else {
            return helmet.dnsPrefetchControl();
        }
    }
}
