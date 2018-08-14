import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as rid from 'connect-rid';

@Injectable()
export class ConnectRidMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: rid.ConnectRidOptions) {
        this.options = opts;
    }

    private static options: rid.ConnectRidOptions;

    public resolve(...args: any[]): MiddlewareFunction {
        if (ConnectRidMiddleware.options) {
            return rid(ConnectRidMiddleware.options);
        }
        return rid();

    }
}
