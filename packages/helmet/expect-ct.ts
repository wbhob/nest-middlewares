import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as helmet from 'helmet';

@Injectable()
export class HelmetExpectCtMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetExpectCtConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetExpectCtConfiguration;

    public resolve(...args: any[]): RequestHandler {
        if (HelmetExpectCtMiddleware.options) {
            return helmet.expectCt(HelmetExpectCtMiddleware.options);
        } else {
            return helmet.expectCt();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
