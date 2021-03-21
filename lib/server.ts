import { Application, Context } from "oak/mod.ts";
import { denoEnv } from "./env.ts";

export const app = new Application();

app.use((ctx) => {
  const payload = { message: "Hello World" };
  ctx.response.body = JSON.stringify(payload);
  log(ctx);
});

export function log(ctx: Context) {
  if (denoEnv() === "test") return;
  const parsed = new URL(String(ctx.request.url));
  const message = `[${ctx.request.method}] ${ctx.request.ip} ${parsed.pathname}`;
  console.log(message);
}
