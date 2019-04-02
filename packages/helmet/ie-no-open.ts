import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetIeNoOpenMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        helmet.ieNoOpen()(req, res, next);
    }
}
