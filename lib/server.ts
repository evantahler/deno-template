import { Application } from "oak/mod.ts";
import { denoEnv } from "./env.ts";

export const app = new Application();

app.use((ctx) => {
  if (denoEnv() !== "test") console.log(`request from ${ctx.request.ip}`);

  const payload = { message: "Hello World" };
  ctx.response.body = JSON.stringify(payload);
});
