import { UserEntity } from "../../entities/UserEntitiy";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserCreateRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUserCreateRequestDTO) {
    const userAlreadyExists = await this.userRepository.findUserByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new UserEntity(data);

    const result = await this.userRepository.createUser(user);

    return result;
  }
}
