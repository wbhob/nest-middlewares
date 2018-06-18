import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as helmet from 'helmet';

@Injectable()
export class HelmetMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetConfiguration;

    public resolve(...args: any[]): RequestHandler {
        if (HelmetMiddleware.options) {
            return helmet(HelmetMiddleware.options);
        } else {
            return helmet();
        }
    }
}

export { HelmetContentSecurityPolicyMiddleware } from './content-security-policy';
export { HelmetDnsPrefetchControlMiddleware } from './dns-prefetch-control';
export { HelmetExpectCtMiddleware } from './expect-ct';
export { HelmetFrameguardMiddleware } from './frameguard';
export { HelmetHidePoweredByMiddleware } from './hide-powered-by';
export { HelmetHpkpMiddleware } from './hpkp';
export { HelmetHstsMiddleware } from './hsts';
export { HelmetIeNoOpenMiddleware } from './ie-no-open';
export { HelmetNoCacheMiddleware } from './no-cache';
export { HelmetNoSniffMiddleware } from './no-sniff';
export { HelmetReferrerPolicyMiddleware } from './referrer-policy';
export { HelmetXssFilterMiddleware } from './xss-filter';
