import { User } from "@prisma/client";

export interface IUserRepository {
  findUserByEmail(email: string): Promise<User>;

  findUserById(id: string): Promise<User>;

  createUser(data: Omit<User, "created_at" | "updated_at">): Promise<User>;

  updateUser(
    id: string,
    data: Omit<User, "created_at" | "updated_at">
  ): Promise<User>;

  deleteUser(id: string): Promise<boolean>;

  findManyUsers(args: {}): Promise<User[]>;
}
