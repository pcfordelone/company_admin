import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { GetUserByIdController } from "./GetUserByIdController";

const userRepository = new PrismaUserRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);

const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export { getUserByIdController };
