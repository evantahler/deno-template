import { Application } from "oak/mod.ts";
import { TimingMiddleware, LoggingMiddleware } from "./middleware/logging.ts";
import { PagesMiddleware } from "./middleware/pages.tsx";
import { APIMiddleware } from "./middleware/api.ts";

export const app = new Application();

app.use(LoggingMiddleware);
app.use(TimingMiddleware);
app.use(PagesMiddleware);
app.use(APIMiddleware);
