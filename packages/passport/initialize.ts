import { Injectable, NestMiddleware } from '@nestjs/common';
import { initialize } from 'passport';

@Injectable()
export class PassportInitializeMiddleware implements NestMiddleware {
    public static configure(opts: any) {
        this.options = opts;
    }
    private static options: any;

    public use(req: any, res: any, next: any) {
        initialize()(req, res, next);
    }
}
