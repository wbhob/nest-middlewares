import { Injectable, NestMiddleware } from '@nestjs/common';
import * as csurf from 'csurf';
import { Request, RequestHandler } from 'express';

@Injectable()
export class CsurfMiddleware implements NestMiddleware {

    public static configure(opts: CsurfOptions) {
        this.options = opts;
    }

    private static options: CsurfOptions;

    public resolve(...args: any[]): RequestHandler {
        if (CsurfMiddleware.options) {
            return csurf(CsurfMiddleware.options);
        } else {
            return csurf();
        }
    }
}

export interface CsurfOptions {
    value?: (req: Request) => string;
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
}
