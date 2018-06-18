import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoSniffMiddleware implements NestMiddleware {
    public resolve(...args: any[]): RequestHandler {
        return helmet.noSniff();
    }
}
