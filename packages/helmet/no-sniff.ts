import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoSniffMiddleware implements NestMiddleware {
    public resolve(...args: any[]) {
        return helmet.noSniff();
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
