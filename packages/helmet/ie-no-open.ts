import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetIeNoOpenMiddleware implements NestMiddleware {
    public resolve(...args: any[]): MiddlewareFunction {
        return helmet.ieNoOpen();
    }
}
