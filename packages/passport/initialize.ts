import { Injectable, NestMiddleware } from '@nestjs/common';
import { initialize } from 'passport';

@Injectable()
export class PassportInitializeMiddleware implements NestMiddleware {
    private static options: any;
    public static configure(opts: any) {
        this.options = opts;
    }

    public resolve(...args: any[]) {
        return initialize();
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
