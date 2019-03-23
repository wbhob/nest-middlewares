import { Injectable, NestMiddleware } from '@nestjs/common';
import * as responseTime from 'response-time';

@Injectable()
export class ResponseTimeMiddleware implements NestMiddleware {

    public static configure(opts: responseTime.ResponseTimeOptions) {
        this.options = opts;
    }

    private static options: responseTime.ResponseTimeOptions;

    public resolve(...args: any[]) {
        if (ResponseTimeMiddleware.options) {
            return responseTime(ResponseTimeMiddleware.options);
        } else {
            return responseTime();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
