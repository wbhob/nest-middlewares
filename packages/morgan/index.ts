import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {

    public static configure(format: string | morgan.FormatFn, opts?: morgan.Options) {
        this.format = format;
        this.options = opts;
    }

    public static token(name: string, callback: morgan.TokenCallbackFn): morgan.Morgan {
        return morgan.token(name, callback);
    }

    private static options: morgan.Options;
    private static format: string | morgan.FormatFn;

    public resolve(...args: any[]): MiddlewareFunction {
        if (MorganMiddleware.format) {
            return morgan(MorganMiddleware.format as any, MorganMiddleware.options);
        } else {
            throw new Error('MorganMiddleware must be configured with a logger format.');
        }
    }
}
