import { Response, Request } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    if (!email) return response.status(422).json("Field email required.");
    if (!password) return response.status(422).json("Field password required.");

    try {
      const result = await this.authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        Error: error.message || "Unexpected Error.",
      });
    }
  }
}
