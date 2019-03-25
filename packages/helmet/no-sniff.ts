import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoSniffMiddleware implements NestMiddleware {
    public resolve(...args: any[]): RequestHandler {
        return helmet.noSniff();
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
