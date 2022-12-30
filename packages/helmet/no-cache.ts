import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetNoCacheMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        console.warn('HelmetNoCacheMiddleware has been deprecated. Please remove from dependency injection.');
        // helmet.noCache()(req, res, next);
    }
}
