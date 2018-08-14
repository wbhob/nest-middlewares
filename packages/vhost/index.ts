import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as vhost from 'vhost';

@Injectable()
export class VhostMiddleware implements NestMiddleware {

    public static configure(path: string, opts: MiddlewareFunction) {
        this.path = path;
        this.handler = opts;
    }

    private static path: string;
    private static handler: MiddlewareFunction;

    public resolve(...args: any[]): MiddlewareFunction {
        if (VhostMiddleware.path && VhostMiddleware.handler) {
            return vhost(VhostMiddleware.path, VhostMiddleware.handler);
        } else {
            throw new Error('ServeStaticMiddleware requires a path and handler in configure.');
        }
    }
}
