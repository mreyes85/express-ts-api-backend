import express from "express";
import path from "path";
import { defaultMiddleware, errorMiddleware } from "./middlewares";
import { exampleRouter } from "./routes/example";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

app.use(defaultMiddleware);
app.use(errorMiddleware);
app.use(exampleRouter);

export default app;