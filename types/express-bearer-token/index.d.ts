import { RequestHandler } from 'express';

declare module 'express-bearer-token' {
    
    function bearerToken(opts?: bearerToken.Options): RequestHandler;

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
