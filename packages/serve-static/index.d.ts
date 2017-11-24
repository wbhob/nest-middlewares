/// <reference types="serve-static" />
/// <reference types="express" />
import * as serveStatic from 'serve-static';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ServeStaticMiddleware implements NestMiddleware {
    static configure(root: string, opts?: serveStatic.ServeStaticOptions): void;
    private static root;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
