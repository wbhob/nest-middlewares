import { Injectable, NestMiddleware } from '@nestjs/common';
import { authenticate } from 'passport';
import { RequestHandler } from 'express-serve-static-core';

@Injectable()
export class PassportAuthenticateMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(opts: any) {
        this.options = opts;
    }

    public resolve(types: string | string[], options: any): RequestHandler {
        return authenticate(types, options);
    }
}
