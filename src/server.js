import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(express.static('public'))

const logger = morgan("dev");

app.use(logger);

app.set("view engine" , "pug")
app.set("views", process.cwd() + '/src/views')

app.use("/", globalRouter);

export default app;