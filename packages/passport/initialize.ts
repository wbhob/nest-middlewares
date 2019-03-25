import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import { initialize } from 'passport';

@Injectable()
export class PassportInitializeMiddleware implements NestMiddleware {
    public static configure(opts: any) {
        this.options = opts;
    }
    private static options: any;

    public resolve(...args: any[]): RequestHandler {
        return initialize();
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
