import { Injectable, NestMiddleware } from '@nestjs/common';
import * as connectTimeout from 'connect-timeout';

@Injectable()
export class ConnectTimeoutMiddleware implements NestMiddleware {

    public static configure(timeout: string, opts?: connectTimeout.TimeoutOptions) {
        this.timeout = timeout;
        this.options = opts;
    }

    private static timeout: string;
    private static options: connectTimeout.TimeoutOptions;

    public use(req: any, res: any, next: any) {
        if (ConnectTimeoutMiddleware.timeout) {
            connectTimeout(ConnectTimeoutMiddleware.timeout, ConnectTimeoutMiddleware.options)(req, res, next);
        } else {
            throw new Error('ConnectTimeoutMiddleware requires a timeout string in configure.');
        }
    }
}
