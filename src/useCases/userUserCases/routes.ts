import { Request, Response, Router } from "express";
import { createUserController } from "./CreateUser";
import { deleteUserController } from "./DeleteUser";
import { getUserByIdController } from "./GetUserById";
import { listUsersController } from "./ListUsers";
import { updateUserController } from "./UpdateUser";

const userRouter: Router = Router();

userRouter.get("/:id", (request: Request, response: Response) => {
  getUserByIdController.handle(request, response);
});

userRouter.get("/", (request: Request, response: Response) => {
  listUsersController.handle(request, response);
});

userRouter.post("/", (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

userRouter.put("/:id", (request: Request, response: Response) => {
  updateUserController.handle(request, response);
});

userRouter.delete("/:id", (request: Request, response: Response) => {
  deleteUserController.handle(request, response);
});

export { userRouter };
