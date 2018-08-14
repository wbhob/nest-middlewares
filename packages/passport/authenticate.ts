import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { authenticate } from 'passport';

@Injectable()
export class PassportAuthenticateMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(opts: any) {
        this.options = opts;
    }

    public resolve(types: string | string[], options: any): MiddlewareFunction {
        return authenticate(types, options);
    }
}
