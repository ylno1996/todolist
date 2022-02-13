import "./db";
import app from "./server";

const PORT = 5555;

const handleListening = () => console.log(`서버가 다음 주소에 열렸습니다. \nhttp://localhost:${PORT}`);

app.listen(PORT, handleListening);

