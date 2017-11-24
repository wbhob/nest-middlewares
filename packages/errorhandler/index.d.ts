/// <reference types="errorhandler" />
/// <reference types="express" />
import * as errorhandler from 'errorhandler';
import { RequestHandler } from 'express';
import { NestMiddleware } from '@nestjs/common';
export declare class ErrorHandlerMiddleware implements NestMiddleware {
    static configure(opts: errorhandler.Options): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
