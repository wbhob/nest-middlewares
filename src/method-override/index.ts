import * as methodOverride from 'method-override';

import { Middleware, NestMiddleware } from '@nestjs/common';
import { Request, RequestHandler, Response } from 'express';

@Middleware()
export class MethodOverrideMiddleware implements NestMiddleware {

    public static configure(
        getter: string | ((req: Request, res: Response) => string),
        opts?: methodOverride.MethodOverrideOptions,
    ) {
        this.getter = getter;
        this.options = opts;
    }

    private static options: methodOverride.MethodOverrideOptions;
    private static getter: string | ((req: Request, res: Response) => string);

    public resolve(...args: any[]): RequestHandler {
        if (MethodOverrideMiddleware.options) {
            return methodOverride(MethodOverrideMiddleware.getter, MethodOverrideMiddleware.options);
        } else {
            return methodOverride();
        }
    }
}
