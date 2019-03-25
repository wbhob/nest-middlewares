import { Injectable, NestMiddleware } from '@nestjs/common';
import * as errorhandler from 'errorhandler';
import { ErrorRequestHandler } from 'express-serve-static-core';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {

    public static configure(opts: errorhandler.Options) {
        this.options = opts;
    }

    private static options: errorhandler.Options;

    public resolve(...args: any[]): ErrorRequestHandler {
        if (ErrorHandlerMiddleware.options) {
            return errorhandler(ErrorHandlerMiddleware.options);
        } else {
            return errorhandler();
        }
    }

    public use(req, res, next) {
      throw new Error('Use ExceptionFilter with @Catch() (https://docs.nestjs.com/exception-filters)');
    }
}
