/// <reference types="compression" />
/// <reference types="express" />
import * as compression from 'compression';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class CompressionMiddleware implements NestMiddleware {
    static configure(opts: compression.CompressionOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
