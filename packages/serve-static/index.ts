import { Injectable, NestMiddleware } from '@nestjs/common';
import serveStatic from 'serve-static';

@Injectable()
export class ServeStaticMiddleware implements NestMiddleware {

    public static configure(root: string, opts?: serveStatic.ServeStaticOptions) {
        this.root = root;
        this.options = opts;
    }

    private static root: string;
    private static options: serveStatic.ServeStaticOptions;

    public use(req: any, res: any, next: any) {
        if (ServeStaticMiddleware.root) {
            serveStatic(ServeStaticMiddleware.root, ServeStaticMiddleware.options)(req, res, next);
        } else {
            throw new Error('ServeStaticMiddleware requires a root in configure.');
        }
    }
}
