import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";

type StrictTransportSecurityOptions = Parameters<typeof helmet.hsts>[0];

@Injectable()
export class HelmetHstsMiddleware implements NestMiddleware {
  public static configure(opts: StrictTransportSecurityOptions) {
    this.options = opts;
  }

  private static options: StrictTransportSecurityOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetHstsMiddleware.options) {
      helmet.hsts(HelmetHstsMiddleware.options)(req, res, next);
    } else {
      helmet.hsts()(req, res, next);
    }
  }
}
