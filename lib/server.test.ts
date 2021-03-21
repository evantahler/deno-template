import { assertEquals } from "testing/asserts.ts";
import { delay } from "async/delay.ts";
import { app } from "./server.ts";

const hostname = "0.0.0.0";
const port = 18080;
const sleep = 1 * 1000;

Deno.env.set("DENO_ENV", "test");

Deno.test("The server boots", async () => {
  const controller = new AbortController();
  const { signal } = controller;

  // start the server
  app.listen({ hostname, port, signal }); // do not await
  await delay(sleep);

  const response = await fetch(`http://${hostname}:${port}/`);
  const json = await response.json();
  assertEquals(json.message, "Hello World");

  // shut down the server
  controller.abort();
});
