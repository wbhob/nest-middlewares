/// <reference types="helmet" />
/// <reference types="express" />
import * as helmet from 'helmet';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class HelmetFrameguardMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetFrameguardConfiguration): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
