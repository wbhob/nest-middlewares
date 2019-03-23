import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetXssFilterMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetXssFilterConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetXssFilterConfiguration;

    public resolve(...args: any[]): MiddlewareFunction {
        if (HelmetXssFilterMiddleware.options) {
            return helmet.xssFilter();
        } else {
            return helmet.xssFilter();
        }
    }
}
