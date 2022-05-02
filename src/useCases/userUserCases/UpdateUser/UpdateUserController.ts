import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, confirmPassword, role } = request.body;
    const id: string = request.params.id;

    try {
      const result = await this.updateUserUseCase.execute(id, {
        name,
        email,
        password,
        role,
      });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        Error: error.message || "Unexpected Error.",
      });
    }
  }
}
