import * as csurf from 'csurf';

import { Middleware, NestMiddleware } from '@nestjs/common';
import { Request, RequestHandler } from 'express';

@Middleware()
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
