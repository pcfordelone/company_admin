import { IUserRepository } from "../../../repositories/IUserRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    const result = await this.userRepository.deleteUser(id);

    return result;
  }
}
