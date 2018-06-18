import { Injectable, NestMiddleware } from '@nestjs/common';
import * as errorhandler from 'errorhandler';
import { RequestHandler } from 'express';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {

    public static configure(opts: errorhandler.Options) {
        this.options = opts;
    }

    private static options: errorhandler.Options;

    public resolve(...args: any[]): RequestHandler {
        if (ErrorHandlerMiddleware.options) {
            return errorhandler(ErrorHandlerMiddleware.options) as any as RequestHandler;
        } else {
            return errorhandler() as any as RequestHandler;
        }
    }
}
