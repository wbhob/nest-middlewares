import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import * as serveIndex from 'serve-index';

@Injectable()
export class ServeIndexMiddleware implements NestMiddleware {

    public static configure(path: string, opts?: serveIndex.Options) {
        this.path = path;
        this.options = opts;
    }

    private static options: serveIndex.Options;
    private static path: string;

    public resolve(...args: any[]): RequestHandler {
        if (ServeIndexMiddleware.options) {
            return serveIndex(ServeIndexMiddleware.path, ServeIndexMiddleware.options);
        } else {
            throw new Error('ServeIndexMiddleware requires a path in configure.');
        }
    }

    public use(req, res, next) {
      return this.resolve()(req, res, next);
    }
}
