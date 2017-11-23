declare module 'vhost' {
    import { RequestHandler } from 'express';

    function vhost(hostname: string, handler: RequestHandler): RequestHandler;

    namespace vhost { }

    export = vhost;
}
