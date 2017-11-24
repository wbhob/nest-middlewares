import * as serveStatic from 'serve-static';

import { Middleware, NestMiddleware } from '@nestjs/common';

import { RequestHandler } from 'express';

@Middleware()
export class ServeStaticMiddleware implements NestMiddleware {

    public static configure(root: string, opts?: serveStatic.ServeStaticOptions){
        this.root = root;
        this.options = opts;
    }

    private static root: string;
    private static options: serveStatic.ServeStaticOptions;

    public resolve(...args: any[]): RequestHandler {
        if (ServeStaticMiddleware.root) {
            return serveStatic(ServeStaticMiddleware.root, ServeStaticMiddleware.options);
        } else {
            throw new Error('ServeStaticMiddleware requires a root in configure.');
        }
    }
}
