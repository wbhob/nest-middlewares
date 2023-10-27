import { Injectable, NestMiddleware } from "@nestjs/common";
import helmet, { HelmetOptions } from "helmet";

@Injectable()
export class HelmetMiddleware implements NestMiddleware {
  public static configure(opts: HelmetOptions) {
    this.options = opts;
  }

  private static options: HelmetOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetMiddleware.options) {
      helmet(HelmetMiddleware.options)(req, res, next);
    } else {
      helmet()(req, res, next);
    }
  }
}

export { HelmetContentSecurityPolicyMiddleware } from "./content-security-policy";
export { HelmetDnsPrefetchControlMiddleware } from "./dns-prefetch-control";
export { HelmetExpectCtMiddleware } from "./expect-ct";
export { HelmetFrameguardMiddleware } from "./frameguard";
export { HelmetHidePoweredByMiddleware } from "./hide-powered-by";
export { HelmetHstsMiddleware } from "./hsts";
export { HelmetIeNoOpenMiddleware } from "./ie-no-open";
export { HelmetNoSniffMiddleware } from "./no-sniff";
export { HelmetReferrerPolicyMiddleware } from "./referrer-policy";
export { HelmetXssFilterMiddleware } from "./xss-filter";
