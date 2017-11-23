import * as middleware from 'middleware';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class MiddlewareMiddleware implements NestMiddleware {
    public resolve(...args: any[]) {
        return middleware();
    }
}
