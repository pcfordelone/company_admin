import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";

const userRepository = new PrismaUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
