/// <reference types="express" />
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ServeFaviconMiddleware implements NestMiddleware {
    static configure(path: string, opts?: ServeFaviconOptions): void;
    private static path;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
export interface ServeFaviconOptions {
    maxAge?: number;
}
