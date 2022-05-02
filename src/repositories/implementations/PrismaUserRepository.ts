import { IUserRepository } from "../IUserRepository";
import { User } from "@prisma/client";
import { prismaClient } from "../../prisma";

export class PrismaUserRepository implements IUserRepository {
  async findUserByEmail(email: string): Promise<User> {
    const user: User = await prismaClient.user.findUnique({
      where: { email: email },
    });

    return user;
  }

  async createUser(
    data: Omit<User, "created_at" | "updated_at">
  ): Promise<User> {
    const user: User = await prismaClient.user.create({ data });

    return user;
  }

  async updateUser(
    id: string,
    data: Omit<User, "created_at" | "updated_at">
  ): Promise<User> {
    const user: User = await prismaClient.user.update({
      where: {
        id: id,
      },
      data: data,
    });

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    const user: User = await prismaClient.user.delete({
      where: {
        id: id,
      },
    });
  }

  async findManyUsers(args: {}): Promise<User[]> {
    const users: User[] = await prismaClient.user.findMany(args);

    return users;
  }
}
