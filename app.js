import express from "express"
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import gloablRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan("dev"));

app.use("/", gloablRouter);

export default app;



