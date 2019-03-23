import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {

    public static configure(opts: cors.CorsOptions) {
        this.options = opts;
    }

    private static options: cors.CorsOptions;

    public resolve(...args: any[]): MiddlewareFunction {
        if (CorsMiddleware.options) {
            return cors(CorsMiddleware.options);
        }
        return cors();
    }
}
