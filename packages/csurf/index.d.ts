/// <reference types="express" />
/// <reference types="csurf" />
import * as csurf from 'csurf';
import { NestMiddleware } from '@nestjs/common';
import { Request, RequestHandler } from 'express';
export declare class CsurfMiddleware implements NestMiddleware {
    static configure(opts: CsurfOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
export interface CsurfOptions {
    value?: (req: Request) => string;
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
}
