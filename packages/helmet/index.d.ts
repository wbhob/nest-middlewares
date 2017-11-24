/// <reference types="helmet" />
/// <reference types="express" />
import * as helmet from 'helmet';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class HelmetMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetConfiguration): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
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
