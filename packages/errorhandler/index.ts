import { Injectable, NestMiddleware } from '@nestjs/common';
import * as errorhandler from 'errorhandler';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {

    public static configure(opts: errorhandler.Options) {
        this.options = opts;
    }

    private static options: errorhandler.Options;

    public resolve(...args: any[]) {
        if (ErrorHandlerMiddleware.options) {
            return errorhandler(ErrorHandlerMiddleware.options);
        } else {
            return errorhandler();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
