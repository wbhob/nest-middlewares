/// <reference types="response-time" />
/// <reference types="express" />
import * as responseTime from 'response-time';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ResponseTimeMiddleware implements NestMiddleware {
    static configure(opts: responseTime.ResponseTimeOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
