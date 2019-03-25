import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as connectTimeout from 'connect-timeout';

@Injectable()
export class ConnectTimeoutMiddleware implements NestMiddleware {

    public static configure(timeout: string, opts?: connectTimeout.TimeoutOptions) {
        this.timeout = timeout;
        this.options = opts;
    }

    private static timeout: string;
    private static options: connectTimeout.TimeoutOptions;

    public resolve(...args: any[]): RequestHandler {
        if (ConnectTimeoutMiddleware.timeout) {
            return connectTimeout(ConnectTimeoutMiddleware.timeout, ConnectTimeoutMiddleware.options);
        } else {
            throw new Error('ConnectTimeoutMiddleware requires a timeout string in configure.');
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
