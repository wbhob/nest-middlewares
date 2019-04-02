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

    public use(req: any, res: any, next: any) {
        if (MethodOverrideMiddleware.options) {
            methodOverride(MethodOverrideMiddleware.getter, MethodOverrideMiddleware.options)(req, res, next);
        } else {
            methodOverride()(req, res, next);
        }
    }
}
