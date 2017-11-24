/// <reference types="cors" />
/// <reference types="express" />
import * as cors from 'cors';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class CorsMiddleware implements NestMiddleware {
    static configure(opts: cors.CorsOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
