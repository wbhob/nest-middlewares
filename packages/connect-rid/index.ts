import { Injectable, NestMiddleware } from '@nestjs/common';
import * as rid from 'connect-rid';

@Injectable()
export class ConnectRidMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: rid.ConnectRidOptions) {
        this.options = opts;
    }

    private static options: rid.ConnectRidOptions;

    public use(req: any, res: any, next: any) {
        if (ConnectRidMiddleware.options) {
            rid(ConnectRidMiddleware.options)(req, res, next);
        } else {
            rid()(req, res, next);
        }
    }

}
