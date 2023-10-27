import { Injectable, NestMiddleware } from "@nestjs/common";
import expressSession from "express-session";

@Injectable()
export class ExpressSessionMiddleware implements NestMiddleware {
  // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
  public static configure(opts: expressSession.SessionOptions) {
    this.options = opts;
  }

  private static options: expressSession.SessionOptions;
  private singleton: ReturnType<typeof expressSession>;

  private getSingleton() {
    if (!this.singleton) {
      if (ExpressSessionMiddleware.options) {
        this.singleton = expressSession(ExpressSessionMiddleware.options);
      } else {
        this.singleton = expressSession();
      }
    }

    return this.singleton;
  }

  public use(req: any, res: any, next: any) {
    this.getSingleton()(req, res, next);
  }
}
