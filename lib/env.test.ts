import { assertEquals } from "testing/asserts.ts";
import { denoEnv } from "./env.ts";

Deno.test("the DENO_ENV defaults to development", () => {
  Deno.env.set("DENO_ENV", "");
  assertEquals(denoEnv(), "development");
});

Deno.test("the DENO_ENV can be changed", () => {
  Deno.env.set("DENO_ENV", "test");
  assertEquals(denoEnv(), "test");
});
