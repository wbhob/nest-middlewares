/// <reference types="cookie-parser" />
/// <reference types="express" />
import * as cookieParser from 'cookie-parser';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class CookieParserMiddleware implements NestMiddleware {
    static configure(secret: string | string[], opts?: cookieParser.CookieParseOptions): void;
    private static secret;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
