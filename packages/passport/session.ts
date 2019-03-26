import { Injectable, NestMiddleware } from '@nestjs/common';
import { session } from 'passport';

@Injectable()
export class PassportSessionMiddleware implements NestMiddleware {
    public static configure(opts: any) {
        this.options = opts;
    }
    private static options: any;

    public use(req: any, res: any, next: any) {
        session()(req, res, next);
    }
}
