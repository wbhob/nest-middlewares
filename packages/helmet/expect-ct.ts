import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class HelmetExpectCtMiddleware implements NestMiddleware {
  public static configure(opts?: {}) {
    throw new Error(
      "ExpectCT middleware has been deprecated. Please remove from dependency injection."
    );
  }

  public use(req: any, res: any, next: any) {
    throw new Error(
      "ExpectCT middleware has been deprecated. Please remove from dependency injection."
    );
  }
}
