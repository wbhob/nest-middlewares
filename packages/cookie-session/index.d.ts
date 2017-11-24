/// <reference types="cookie-session" />
/// <reference types="express" />
import * as cookieSession from 'cookie-session';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class CookieSessionMiddleware implements NestMiddleware {
    static configure(opts: cookieSession.CookieSessionOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
