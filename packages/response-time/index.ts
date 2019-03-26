import { Injectable, NestMiddleware } from '@nestjs/common';
import * as responseTime from 'response-time';

@Injectable()
export class ResponseTimeMiddleware implements NestMiddleware {

    public static configure(opts: responseTime.ResponseTimeOptions) {
        this.options = opts;
    }

    private static options: responseTime.ResponseTimeOptions;

    public use(req: any, res: any, next: any) {
        if (ResponseTimeMiddleware.options) {
            responseTime(ResponseTimeMiddleware.options)(req, res, next);
        } else {
            responseTime()(req, res, next);
        }
    }
}
