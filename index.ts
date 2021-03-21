import { app } from "./lib/server.ts";
import "dotenv/load.ts";

const controller = new AbortController();
const { signal } = controller;

const hostname = Deno.env.get("BIND");
const port = Number(Deno.env.get("PORT"));

console.log(`🌳 oak server running at http://${hostname}:${port} 🌳`);
await app.listen({ port, hostname, signal });
