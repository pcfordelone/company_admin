import { findManyArgs } from "../../../repositories/implementations/PrismaUserRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(args?: findManyArgs) {
    const result = await this.userRepository.findManyUsers({
      take: Number(args.take) || undefined,
    });

    return result;
  }
}
