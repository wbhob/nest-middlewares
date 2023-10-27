import { Injectable, NestMiddleware } from '@nestjs/common';
import serveFavicon from 'serve-favicon';

@Injectable()
export class ServeFaviconMiddleware implements NestMiddleware {

    public static configure(path: string, opts?: ServeFaviconOptions) {
        this.path = path;
        this.options = opts;
    }

    private static path: string;
    private static options: ServeFaviconOptions;

    public use(req: any, res: any, next: any) {
        if (ServeFaviconMiddleware.path) {
            serveFavicon(ServeFaviconMiddleware.path, ServeFaviconMiddleware.options)(req, res, next);
        } else {
            throw new Error('ServeFaviconMiddleware requires a path in configure.');
        }
    }
}

export interface ServeFaviconOptions {
    maxAge?: number;
}
