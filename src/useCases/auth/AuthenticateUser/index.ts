import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { JWTAuthenticateProvider } from "../../../providers/implementations/JWTAuthenticateProvider";
import { AuthenticateUserController } from "./AuthenticateUserController";

const userRepository = new PrismaUserRepository();
const authenticateProvider = new JWTAuthenticateProvider();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  userRepository,
  authenticateProvider
);

const authenticateController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateController };
