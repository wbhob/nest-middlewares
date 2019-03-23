import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHstsMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHstsConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHstsConfiguration;

    public resolve(...args: any[]): MiddlewareFunction {
        if (HelmetHstsMiddleware.options) {
            return helmet.hsts(HelmetHstsMiddleware.options);
        } else {
            return helmet.hsts();
        }
    }
}
