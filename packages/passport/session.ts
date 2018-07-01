import { Injectable, NestMiddleware } from '@nestjs/common';
import { session } from 'passport';
import { RequestHandler } from 'express-serve-static-core';

@Injectable()
export class PassportSessionMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(opts: any) {
        this.options = opts;
    }

    public resolve(...args: any[]): RequestHandler {
        return session();
    }
}
