import express from "express";
import morgan from "morgan";

const PORT = 5227;

const app = express();
const loggger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(loggger)
/*
app.use("/", globalRouter)
*/
const listening = () => console.log(`노드 서버가 다음 포트에서 동작중입니다. \n https://localhost:${PORT}`);

app.listen(PORT, listening);

