import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";

@Injectable()
export class HelmetHidePoweredByMiddleware implements NestMiddleware {
  public static configure() {
    console.warn(
      "HelmetHidePoweredByMiddleware no longer requires configure()."
    );
    // this.options = opts;
  }

  public use(req: any, res: any, next: any) {
    helmet.hidePoweredBy()(req, res, next);
  }
}
