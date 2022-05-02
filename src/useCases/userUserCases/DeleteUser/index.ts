import { DeleteUserController } from "./DeleteUserController";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const userRepository = new PrismaUserRepository();
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
