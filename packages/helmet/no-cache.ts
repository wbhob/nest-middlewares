import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoCacheMiddleware implements NestMiddleware {
    public resolve(...args: any[]): MiddlewareFunction {
        return helmet.noCache();
    }
}
