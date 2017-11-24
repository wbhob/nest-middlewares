import * as responseTime from 'response-time';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class ResponseTimeMiddleware implements NestMiddleware {

    public static configure(opts: responseTime.ResponseTimeOptions) {
        this.options = opts;
    }

    private static options: responseTime.ResponseTimeOptions;

    public resolve(...args: any[]): RequestHandler {
        if (ResponseTimeMiddleware.options) {
            return responseTime(ResponseTimeMiddleware.options);
        } else {
            return responseTime();
        }
    }
}
