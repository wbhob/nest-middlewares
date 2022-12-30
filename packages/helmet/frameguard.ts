import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";
import { XFrameOptionsOptions } from "helmet/dist/types/middlewares/x-frame-options";

@Injectable()
export class HelmetFrameguardMiddleware implements NestMiddleware {
  public static configure(opts: XFrameOptionsOptions) {
    this.options = opts;
  }

  private static options: XFrameOptionsOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetFrameguardMiddleware.options) {
      return helmet.frameguard(HelmetFrameguardMiddleware.options)(
        req,
        res,
        next
      );
    } else {
      return helmet.frameguard()(req, res, next);
    }
  }
}
