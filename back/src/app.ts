import cors from "cors";
import express from "express";
import { handleError } from "./errors";
import { userRouter } from "./routes/user.routes";
import { listRouter } from "./routes/list.routes";
import { loginRouter } from "./routes/login.routes";

export const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/list", listRouter);
app.use("/login",loginRouter)
app.use(handleError);
