import express from "express";
import {home, confirmId,individual} from "../controllers/globalController"

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/?user=", confirmId ,individual ); //날짜를 선택하면 나오는 해당 Todo 리스트를 출력하는 페이지  

export default globalRouter