import { Request, Response, Router } from "express";
import { createUserController } from ".";

const userRouter: Router = Router();

userRouter.post("/", (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

export { userRouter };
