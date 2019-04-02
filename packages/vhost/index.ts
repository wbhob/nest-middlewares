import { Injectable, NestMiddleware } from '@nestjs/common';
import * as vhost from 'vhost';

@Injectable()
export class VhostMiddleware implements NestMiddleware {

    public static configure(path: string, opts: any) {
        this.path = path;
        this.handler = opts;
    }

    private static path: string;
    private static handler: any;

    public use(req: any, res: any, next: any) {
        if (VhostMiddleware.path && VhostMiddleware.handler) {
            vhost(VhostMiddleware.path, VhostMiddleware.handler)(req, res, next);
        } else {
            throw new Error('ServeStaticMiddleware requires a path and handler in configure.');
        }
    }
}
