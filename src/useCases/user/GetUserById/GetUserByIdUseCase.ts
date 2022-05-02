import { IUserRepository } from "../../../repositories/IUserRepository";

export class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    const result = await this.userRepository.findUserById(id);

    return result;
  }
}
