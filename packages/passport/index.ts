import { Injectable, NestMiddleware } from '@nestjs/common';
import { initialize, session } from 'passport';

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
