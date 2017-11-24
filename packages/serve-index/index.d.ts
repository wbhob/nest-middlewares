/// <reference types="serve-index" />
/// <reference types="express" />
import * as serveIndex from 'serve-index';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ServeIndexMiddleware implements NestMiddleware {
    static configure(path: string, opts?: serveIndex.Options): void;
    private static options;
    private static path;
    resolve(...args: any[]): RequestHandler;
}
