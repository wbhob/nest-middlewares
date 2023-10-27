import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";

type ReferrerPolicyOptions = Parameters<typeof helmet.referrerPolicy>[0];

@Injectable()
export class HelmetReferrerPolicyMiddleware implements NestMiddleware {
  public static configure(opts: ReferrerPolicyOptions) {
    this.options = opts;
  }

  private static options: ReferrerPolicyOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetReferrerPolicyMiddleware.options) {
      helmet.referrerPolicy(HelmetReferrerPolicyMiddleware.options)(
        req,
        res,
        next
      );
    } else {
      helmet.referrerPolicy()(req, res, next);
    }
  }
}
