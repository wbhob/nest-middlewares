import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as methodOverride from 'method-override';

@Injectable()
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

    public resolve(...args: any[]) {
        if (MethodOverrideMiddleware.options) {
            return methodOverride(MethodOverrideMiddleware.getter, MethodOverrideMiddleware.options);
        } else {
            return methodOverride();
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
