import "./db";
import "./models/todo"
import app from "./server";

const PORT = 5227;


const listening = () => console.log(`노드 서버가 다음 포트에서 동작중입니다. \n https://localhost:${PORT}`);

app.listen(PORT, listening);

