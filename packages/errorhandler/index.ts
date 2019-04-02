import { Injectable, NestMiddleware } from '@nestjs/common';
import * as errorhandler from 'errorhandler';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {

    public static configure(opts: errorhandler.Options) {
        this.options = opts;
    }

    private static options: errorhandler.Options;

    public use(req: any, res: any, next: any) {
        if (ErrorHandlerMiddleware.options) {
            (errorhandler(ErrorHandlerMiddleware.options) as any)(req, res, next);
        } else {
            (errorhandler() as any)(req, res, next);
        }
    }
}
