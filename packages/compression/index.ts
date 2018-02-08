import * as compression from 'compression';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class CompressionMiddleware implements NestMiddleware {

    public static configure(opts: compression.CompressionOptions) {
        this.options = opts;
    }

    private static options: compression.CompressionOptions;

    public resolve(...args: any[]) {
        if (CompressionMiddleware.options) {
            return compression(CompressionMiddleware.options);
        } else {
            return compression();
        }
    }
}
