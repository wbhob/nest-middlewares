import { RequestHandler } from 'express';

declare module 'vhost' {

    function vhost(hostname: string, handler: RequestHandler): RequestHandler;

    namespace vhost { }

    export = vhost;
}
