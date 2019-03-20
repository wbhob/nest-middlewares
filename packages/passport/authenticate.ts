import { Injectable, NestMiddleware } from '@nestjs/common';
import { authenticate } from 'passport';

@Injectable()
export class PassportAuthenticateMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(types: string | string[], opts: any) {
        this.options = opts;
        this.types = types;
    }

    public resolve(...args: any[]) {
        return authenticate(this.types, this.options);
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
