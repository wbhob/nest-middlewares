import { Injectable, NestMiddleware } from '@nestjs/common';
import { session } from 'passport';

@Injectable()
export class PassportSessionMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(opts: any) {
        this.options = opts;
    }

    public resolve(...args: any[]) {
        return session();
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
