export function denoEnv() {
  const defaultValue = "development";
  const env = Deno.env.get("DENO_ENV");
  if (env && env.length > 0) return env;
  return defaultValue;
}
