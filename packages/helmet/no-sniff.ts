import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoSniffMiddleware implements NestMiddleware {
    public resolve(...args: any[]): MiddlewareFunction {
        return helmet.noSniff();
    }
}
