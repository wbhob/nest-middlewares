import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetHidePoweredByMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetHidePoweredByConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetHidePoweredByConfiguration;

    public resolve(...args: any[]): MiddlewareFunction {
        if (HelmetHidePoweredByMiddleware.options) {
            return helmet.hidePoweredBy(HelmetHidePoweredByMiddleware.options);
        } else {
            return helmet.hidePoweredBy();
        }
    }
}
