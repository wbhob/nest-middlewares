import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as errorhandler from 'errorhandler';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {

    public static configure(opts: errorhandler.Options) {
        this.options = opts;
    }

    private static options: errorhandler.Options;

    public resolve(...args: any[]): MiddlewareFunction {
        if (ErrorHandlerMiddleware.options) {
            return errorhandler(ErrorHandlerMiddleware.options) as any as MiddlewareFunction;
        } else {
            return errorhandler() as any as MiddlewareFunction;
        }
    }
}
