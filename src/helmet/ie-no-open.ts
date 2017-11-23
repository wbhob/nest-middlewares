import * as helmet from 'helmet';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class HelmetIeNoOpenMiddleware implements NestMiddleware {
    public resolve(...args: any[]) {
        return helmet.ieNoOpen();
    }
}
