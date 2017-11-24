/// <reference types="express" />
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class HelmetIeNoOpenMiddleware implements NestMiddleware {
    resolve(...args: any[]): RequestHandler;
}
