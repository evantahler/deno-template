import { Context } from "oak/mod.ts";
import * as path from "path/mod.ts";
import { Next } from "../types.ts";

const __dirname = new URL(".", import.meta.url).pathname;
const pagesDir = path.join(__dirname, "..", "pages");

const fileNotFound = `<html><body>File not found :(</body></html>`;

export async function PagesMiddleware(ctx: Context, next: Next) {
  if (ctx.request.url.pathname.match(/^\/api/)) return next();

  let requestPath = path.join(pagesDir, ctx.request.url.pathname);
  if (requestPath[requestPath.length - 1] === "/") requestPath += "index.html";

  try {
    if (!requestPath.startsWith(pagesDir))
      throw new Error("outside pages directory");

    await Deno.stat(requestPath);
    const contents = await Deno.readFile(requestPath);
    ctx.response.body = contents;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      ctx.response.status = 404;
      ctx.response.body = fileNotFound;
    } else {
      throw error;
    }
  }

  return next();
}
