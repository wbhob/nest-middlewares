/// <reference types="express-session" />
/// <reference types="express" />
import * as expressSession from 'express-session';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ExpressSessionMiddleware implements NestMiddleware {
    static configure(opts: expressSession.SessionOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
