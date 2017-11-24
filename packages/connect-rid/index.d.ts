/// <reference types="connect-rid" />
/// <reference types="express" />
import * as rid from 'connect-rid';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class ConnectRidMiddleware implements NestMiddleware {
    static configure(opts: rid.ConnectRidOptions): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}
