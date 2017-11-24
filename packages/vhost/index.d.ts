/// <reference types="express" />
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class VhostMiddleware implements NestMiddleware {
    static configure(path: string, opts: RequestHandler): void;
    private static path;
    private static handler;
    resolve(...args: any[]): RequestHandler;
}
