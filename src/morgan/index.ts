import * as morgan from 'morgan';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class MorganMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(format: string | morgan.FormatFn, opts?: morgan.Options) {
        this.format = format;
        this.options = opts;
    }

    private static options: morgan.Options;
    private static format: string | morgan.FormatFn;

    public resolve(...args: any[]): RequestHandler {
        if (MorganMiddleware.format) {
            return morgan(MorganMiddleware.format as any, MorganMiddleware.options);
        } else {
            throw new Error('MorganMiddleware must be configured with a logger format.');
        }
    }
}
