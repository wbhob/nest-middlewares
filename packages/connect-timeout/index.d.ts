/// <reference types="connect-timeout" />
/// <reference types="express" />
import * as connectTimeout from 'connect-timeout';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ConnectTimeoutMiddleware implements NestMiddleware {
    static configure(timeout: string, opts?: connectTimeout.TimeoutOptions): void;
    private static timeout;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
