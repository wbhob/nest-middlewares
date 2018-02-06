declare module 'connect-rid' {
    import { RequestHandler } from 'express';

    function rid(): RequestHandler;
    function rid(opts: rid.ConnectRidOptions): RequestHandler;

    namespace rid {
        interface ConnectRidOptions {
            headerName?: string;
        }
    }

    export = rid;
}
