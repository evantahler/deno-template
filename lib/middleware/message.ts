import { Context } from "oak/mod.ts";

export function MessageMiddleware(ctx: Context) {
  const payload = { message: "Hello World" };
  ctx.response.body = JSON.stringify(payload);
}
