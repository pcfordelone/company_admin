import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";

const userRepository = new PrismaUserRepository();
const updateUserUseCase = new UpdateUserUseCase(userRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
