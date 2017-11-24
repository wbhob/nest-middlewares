/// <reference types="morgan" />
/// <reference types="express" />
import * as morgan from 'morgan';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class MorganMiddleware implements NestMiddleware {
    static configure(format: string | morgan.FormatFn, opts?: morgan.Options): void;
    static token(name: string, callback: morgan.TokenCallbackFn): morgan.Morgan;
    private static options;
    private static format;
    resolve(...args: any[]): RequestHandler;
}
