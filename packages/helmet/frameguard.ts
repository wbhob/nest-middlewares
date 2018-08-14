import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetFrameguardMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetFrameguardConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetFrameguardConfiguration;

    public resolve(...args: any[]): MiddlewareFunction {
        if (HelmetFrameguardMiddleware.options) {
            return helmet.frameguard(HelmetFrameguardMiddleware.options);
        } else {
            return helmet.frameguard();
        }
    }
}
