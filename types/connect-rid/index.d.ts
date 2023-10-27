import { RequestHandler } from "express";

declare module "connect-rid" {
  export function rid(opts?: ConnectRidOptions): RequestHandler;

  export interface ConnectRidOptions {
    headerName?: string;
  }

  // @ts-ignore
  export = rid;
}
