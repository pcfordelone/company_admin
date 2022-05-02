import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import bcrypt from "bcrypt";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, confirmPassword, role } = request.body;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const result = await this.createUserUseCase.execute({
        name,
        email,
        password: hashedPassword,
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
