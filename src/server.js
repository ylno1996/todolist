
import globalRouter from "./routers/globalRouter";
import express from "express";
import morgan from "morgan";



const app = express();
const loggger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");


app.use(loggger);
app.use("/", globalRouter);



export default app;