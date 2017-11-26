declare module 'express-bearer-token' {
    import { RequestHandler } from 'express';

    function bearerToken(): RequestHandler;
    function bearerToken(opts: bearerToken.Options): RequestHandler;

    namespace bearerToken {
        export interface Options {
            bodyKey?: string;
            queryKey?: string;
            headerKey?: string;
            reqKey?: string;
        }
    }

    export = bearerToken;
}
