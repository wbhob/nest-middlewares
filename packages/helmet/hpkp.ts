import { Injectable, NestMiddleware } from "@nestjs/common";
import helmet from "helmet";

@Injectable()
export class HelmetHpkpMiddleware implements NestMiddleware {
  public static configure(opts: any) {
    throw new Error(
      "HPKP middleware has been deprecated. Please remove from dependency injection."
    );
  }

  public use(req: any, res: any, next: any) {
    throw new Error(
      "HPKP middleware has been deprecated. Please remove from dependency injection."
    );
  }
}
