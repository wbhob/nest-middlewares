import { Injectable, NestMiddleware } from '@nestjs/common';
import { initialize, session, authenticate } from 'passport';

@Injectable()
export class PassportInitializeMiddleware implements NestMiddleware {
    public resolve(...args: any[]): RequestHandler {
        return initialize();
    }
}

@Injectable()
export class PassportSessionMiddleware implements NestMiddleware {
    public resolve(...args: any[]): RequestHandler {
        return session();
    }
}

@Injectable()
export class PassportAuthenticateMiddleware implements NestMiddleware {
    public resolve(types: string | string[], options: any): RequestHandler {
        return authenticate(types, options);
    }
}
