import { serve } from "http/server.ts";
import "dotenv/load.ts";

const hostname = Deno.env.get("BIND");
const port = Number(Deno.env.get("PORT"));

export const server = serve({ hostname, port });

console.log(
  `HTTP webserver running.  Access it at:  http://${hostname}:${port}`
);

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
