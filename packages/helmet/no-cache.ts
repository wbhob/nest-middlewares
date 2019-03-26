import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoCacheMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        helmet.noCache()(req, res, next);
    }
}
