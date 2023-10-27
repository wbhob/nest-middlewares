import { Injectable, NestMiddleware } from '@nestjs/common';
import csurf from 'csurf';
import { Request } from 'express';

@Injectable()
export class CsurfMiddleware implements NestMiddleware {

    public static configure(opts: CsurfOptions) {
        this.options = opts;
    }

    private static options: CsurfOptions;

    public use(req: any, res: any, next: any) {
        if (CsurfMiddleware.options) {
            csurf(CsurfMiddleware.options)(req, res, next);
        } else {
            csurf()(req, res, next);
        }
    }
}

export interface CsurfOptions {
    value?: (req: Request) => string;
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
}
