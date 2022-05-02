import express, { Request, Response } from "express";
import { router } from "./router";
import { authRouter } from "./useCases/AuthenticateUser/routes";
import { userRouter } from "./useCases/user/routes";

const app = express();

app.use(express.json());
app.use(router);
app.use("/auth", authRouter);
app.use("/users", userRouter);

export { app };
