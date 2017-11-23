import * as errorhandler from 'errorhandler';

import { ErrorRequestHandler, RequestHandler } from 'express';
import { Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class ErrorHandlerMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
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
