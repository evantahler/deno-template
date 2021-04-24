import { Context } from "oak/mod.ts";
import { Next } from "../types.ts";

export function APIMiddleware(ctx: Context, next: Next) {
  if (!ctx.request.url.pathname.match(/^\/api/)) return next();

  const payload = { message: "Hello from the API!" };
  ctx.response.body = JSON.stringify(payload);
  return next();
}
