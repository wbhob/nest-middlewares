import { Injectable, NestMiddleware } from '@nestjs/common';
import * as rid from 'connect-rid';
import { RequestHandler } from 'express';

@Injectable()
export class ConnectRidMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: rid.ConnectRidOptions) {
        this.options = opts;
    }

    private static options: rid.ConnectRidOptions;

    public resolve(...args: any[]): RequestHandler {
        if (ConnectRidMiddleware.options) {
            return rid(ConnectRidMiddleware.options);
        } else {
            return rid();
        }
    }
}
