import { Injectable, NestMiddleware } from '@nestjs/common';
import * as vhost from 'vhost';

@Injectable()
export class VhostMiddleware implements NestMiddleware {

    public static configure(path: string, opts) {
        this.path = path;
        this.handler = opts;
    }

    private static path: string;
    private static handler;

    public resolve(...args: any[]) {
        if (VhostMiddleware.path && VhostMiddleware.handler) {
            return vhost(VhostMiddleware.path, VhostMiddleware.handler);
        } else {
            throw new Error('ServeStaticMiddleware requires a path and handler in configure.');
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
