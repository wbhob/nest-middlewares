import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";
import { ExpectCtOptions } from "helmet/dist/types/middlewares/expect-ct";

@Injectable()
export class HelmetExpectCtMiddleware implements NestMiddleware {
  public static configure(opts: ExpectCtOptions) {
    this.options = opts;
  }

  private static options: ExpectCtOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetExpectCtMiddleware.options) {
      helmet.expectCt(HelmetExpectCtMiddleware.options)(req, res, next);
    } else {
      helmet.expectCt()(req, res, next);
    }
  }
}
