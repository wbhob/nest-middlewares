/// <reference types="express" />
/// <reference types="method-override" />
import * as methodOverride from 'method-override';
import { NestMiddleware } from '@nestjs/common';
import { Request, RequestHandler, Response } from 'express';
export declare class MethodOverrideMiddleware implements NestMiddleware {
    static configure(getter: string | ((req: Request, res: Response) => string), opts?: methodOverride.MethodOverrideOptions): void;
    private static options;
    private static getter;
    resolve(...args: any[]): RequestHandler;
}
