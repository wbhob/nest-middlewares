import * as cors from 'cors';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class CorsMiddleware implements NestMiddleware {

    public static configure(opts: cors.CorsOptions) {
        this.options = opts;
    }

    private static options: cors.CorsOptions;


    public resolve(...args: any[]) {
        if (CorsMiddleware.options) {
            return cors(CorsMiddleware.options);
        } else {
            return cors();
        }
    }
}
