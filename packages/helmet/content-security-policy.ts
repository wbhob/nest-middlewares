import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";
import { ContentSecurityPolicyOptions } from "helmet/dist/types/middlewares/content-security-policy";

@Injectable()
export class HelmetContentSecurityPolicyMiddleware implements NestMiddleware {
  public static configure(opts: ContentSecurityPolicyOptions) {
    this.options = opts;
  }

  private static options: ContentSecurityPolicyOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetContentSecurityPolicyMiddleware.options) {
      helmet.contentSecurityPolicy(
        HelmetContentSecurityPolicyMiddleware.options
      )(req, res, next);
    } else {
      throw new Error(
        "HelmetContentSecurityPolicyMiddleware requires you" +
          " to call `configure` before injection to set CSP options."
      );
    }
  }
}
