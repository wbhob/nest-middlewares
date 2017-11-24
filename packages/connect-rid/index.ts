import * as rid from 'connect-rid';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class ConnectRidMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: rid.ConnectRidOptions) {
        this.options = opts;
    }

    private static options: rid.ConnectRidOptions;

    public resolve(...args: any[]) {
        if (ConnectRidMiddleware.options) {
            return rid(ConnectRidMiddleware.options);
        } else {
            return rid();
        }
    }
}
