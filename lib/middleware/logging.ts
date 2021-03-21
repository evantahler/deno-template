import { Context } from "oak/mod.ts";
import { Next } from "../types.ts";
import { log } from "../logger.ts";

export async function TimingMiddleware(ctx: Context, next: Next) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}

export async function LoggingMiddleware(ctx: Context, next: Next) {
  await next();
  log(ctx);
}
