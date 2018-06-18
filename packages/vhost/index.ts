import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as vhost from 'vhost';

@Injectable()
export class VhostMiddleware implements NestMiddleware {

    public static configure(path: string, opts: RequestHandler) {
        this.path = path;
        this.handler = opts;
    }

    private static path: string;
    private static handler: RequestHandler;

    public resolve(...args: any[]): RequestHandler {
        if (VhostMiddleware.path && VhostMiddleware.handler) {
            return vhost(VhostMiddleware.path, VhostMiddleware.handler);
        } else {
            throw new Error('ServeStaticMiddleware requires a path and handler in configure.');
        }
    }
}
