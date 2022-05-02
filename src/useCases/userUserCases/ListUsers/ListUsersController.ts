import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { User } from "@prisma/client";

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const args = request.query;

    //return response.json(args.take);

    try {
      const result: User[] = await this.listUsersUseCase.execute(args);

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        Error: error.message || "Unexpected Error.",
      });
    }
  }
}
