import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';
import { RequestHandler } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {

    public static configure(opts: cors.CorsOptions) {
        this.options = opts;
    }

    private static options: cors.CorsOptions;

    public resolve(...args: any[]): RequestHandler {
        if (CorsMiddleware.options) {
            return cors(CorsMiddleware.options);
        } else {
            return cors();
        }
    }
}
