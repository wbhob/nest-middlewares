import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetIeNoOpenMiddleware implements NestMiddleware {
    public resolve(...args: any[]) {
        return helmet.ieNoOpen();
    }

    public use(req, res, next) {
      return this.resolve(req, res, next);
    }
}
