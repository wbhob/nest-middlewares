import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import { authenticate } from 'passport';

@Injectable()
export class PassportAuthenticateMiddleware implements NestMiddleware {
    public static configure(types: string | string[], opts: any) {
        this.options = opts;
        this.types = types;
    }
    private static options: any;
    private static types: string | string[];

    public resolve(...args: any[]): RequestHandler {
        return authenticate(PassportAuthenticateMiddleware.types, PassportAuthenticateMiddleware.options);
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
