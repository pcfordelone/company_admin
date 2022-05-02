import { Request, Response, response } from "express";
import { User } from "@prisma/client";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

export class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    try {
      const result: User = await this.getUserByIdUseCase.execute(id);

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        Error: error.message || "Unexpected Error.",
      });
    }
  }
}
