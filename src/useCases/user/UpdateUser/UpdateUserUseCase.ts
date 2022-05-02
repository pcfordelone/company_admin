import { UserEntity } from "../../../entities/UserEntitiy";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUserUpdateRequestDTO } from "./UpdateUserDTO";
import bcrypt from "bcrypt";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: IUserUpdateRequestDTO) {
    const oldUser = await this.userRepository.findUserById(id);

    oldUser.name = data.name;
    oldUser.email = data.email;
    oldUser.role = data.role;

    if (data.password) {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(data.password, salt);

      oldUser.password = hashedPassword;
    }

    const user = new UserEntity(oldUser, oldUser.id);

    const result = await this.userRepository.updateUser(id, user);

    return result;
  }
}
