import { RequestHandler } from 'express';

declare module 'connect-rid' {

    function rid(opts?: rid.ConnectRidOptions): RequestHandler;

    namespace rid {
        interface ConnectRidOptions {
            headerName?: string;
        }
    }

    export = rid;
}
