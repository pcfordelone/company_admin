import { Request, Response, Router } from "express";
import { authenticateController } from ".";

const authRouter: Router = Router();

authRouter.post("/login", (request: Request, response: Response) => {
  authenticateController.handle(request, response);
});

export { authRouter };
