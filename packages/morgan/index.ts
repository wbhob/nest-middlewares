import { Injectable, NestMiddleware } from '@nestjs/common';
import * as http from 'http';
import morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {

    public static configure(format: string | morgan.FormatFn, opts?: morgan.Options<http.IncomingMessage, http.ServerResponse>) {
        this.format = format;
        this.options = opts;
    }

    public static token(name: string, callback: morgan.TokenCallbackFn): morgan.Morgan<http.IncomingMessage, http.ServerResponse> {
        return morgan.token(name, callback);
    }

    private static options: morgan.Options<http.IncomingMessage, http.ServerResponse>;
    private static format: string | morgan.FormatFn;

    public use(req: any, res: any, next: any) {
        if (MorganMiddleware.format) {
            morgan(MorganMiddleware.format as any, MorganMiddleware.options)(req, res, next);
        } else {
            throw new Error('MorganMiddleware must be configured with a logger format.');
        }
    }
}
