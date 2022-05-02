import express, { Request, Response } from "express";
import { router } from "./router";
import { authRouter } from "./useCases/AuthenticateUser/routes";

const app = express();

app.use(express.json());
app.use(router);
app.use("/auth", authRouter);

export { app };
