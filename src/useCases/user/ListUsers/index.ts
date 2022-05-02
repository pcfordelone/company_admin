import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const userRepository = new PrismaUserRepository();
const listUsersUseCase = new ListUsersUseCase(userRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
