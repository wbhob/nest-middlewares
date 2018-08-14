import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { initialize } from 'passport';

@Injectable()
export class PassportInitializeMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(opts: any) {
        this.options = opts;
    }

    public resolve(...args: any[]): MiddlewareFunction {
        return initialize();
    }
}
