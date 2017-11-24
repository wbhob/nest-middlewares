import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetExpectCtMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetExpectCtConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetExpectCtConfiguration;

    public resolve(...args: any[]) {
        if (HelmetExpectCtMiddleware.options) {
            return helmet.expectCt(HelmetExpectCtMiddleware.options);
        } else {
            return helmet.expectCt();
        }
    }
}
