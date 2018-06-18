import { Injectable, NestMiddleware } from '@nestjs/common';
import * as compression from 'compression';
import { RequestHandler } from 'express';

@Injectable()
export class CompressionMiddleware implements NestMiddleware {

    public static configure(opts: compression.CompressionOptions) {
        this.options = opts;
    }

    private static options: compression.CompressionOptions;

    public resolve(...args: any[]): RequestHandler {
        if (CompressionMiddleware.options) {
            return compression(CompressionMiddleware.options);
        } else {
            return compression();
        }
    }
}
