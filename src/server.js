import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const PORT = 5432;

const app = express();

const logger = morgan("dev");

app.use(logger);

app.set("view engine" , "pug")
app.set("views", process.cwd() + '/src/views')

app.use("/", globalRouter);

const listening = () => console.log(`서버가 다음 포트에 열렸습니다.\nhttp://localhost:${PORT}`);

app.listen(PORT, listening);

console.log("테스트");
