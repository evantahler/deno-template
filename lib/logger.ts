import { Context } from "oak/mod.ts";
import { denoEnv } from "./env.ts";

export function log(ctx: Context) {
  if (denoEnv() === "test") return;
  const responseTime = ctx.response.headers.get("X-Response-Time");
  const parsed = new URL(String(ctx.request.url));
  const message = `${timeStamp()} - [${ctx.request.method}] ${ctx.request.ip} ${
    parsed.pathname
  }${responseTime ? ` (${responseTime})` : ""}`;
  console.log(message);
}

function timeStamp() {
  const now = new Date();
  return now.toISOString();
}
