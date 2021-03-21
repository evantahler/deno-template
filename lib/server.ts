import { Application } from "oak/mod.ts";
import { MessageMiddleware } from "./middleware/message.ts";
import { TimingMiddleware, LoggingMiddleware } from "./middleware/logging.ts";

export const app = new Application();

app.use(LoggingMiddleware);
app.use(TimingMiddleware);
app.use(MessageMiddleware);
