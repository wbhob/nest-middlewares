import { Injectable, NestMiddleware } from '@nestjs/common';
import { authenticate } from 'passport';

@Injectable()
export class PassportAuthenticateMiddleware implements NestMiddleware {
    public static configure(types: any, opts: any) {
        this.types = types;
        this.options = opts;
    }
    private static types: any;
    private static options: any;

    public use(req: any, res: any, next: any) {
        authenticate(PassportAuthenticateMiddleware.types, PassportAuthenticateMiddleware.options)(req, res, next);
    }
}
