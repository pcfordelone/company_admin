import { IAuthenticateProvider } from "../../providers/IAuthenticateProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import bcrypt from "bcrypt";

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authenticateProvider: IAuthenticateProvider
  ) {}

  async execute(data: IAuthenticateUserRequestDTO) {
    const user = await this.userRepository.findUserByEmail(data.email);

    if (!user) {
      throw new Error("User not exists.");
    }

    const checkPassword = await bcrypt.compare(data.password, user.password);

    if (!checkPassword) {
      throw new Error("Password incorrect.");
    }

    const result = this.authenticateProvider.authenticate(user);

    return result;
  }
}
