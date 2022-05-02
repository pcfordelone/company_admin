import { IUserRepository } from "../IUserRepository";
import { Prisma, User } from "@prisma/client";
import { prismaClient } from "../../prisma";

export interface findManyArgs {
  select?: Prisma.UserSelect;
  include?: Prisma.UserInclude;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.Enumerable<Prisma.UserOrderByWithRelationInput>;
  cursor?: Prisma.UserWhereUniqueInput;
  take?: number;
  skip?: number;
}

export class PrismaUserRepository implements IUserRepository {
  async findUserById(id: string): Promise<User> {
    const user: User = await prismaClient.user.findUnique({
      where: { id: id },
    });

    return user;
  }

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

  async deleteUser(id: string): Promise<boolean> {
    const user: User = await prismaClient.user.delete({
      where: {
        id: id,
      },
    });

    return true;
  }

  async findManyUsers(args: findManyArgs): Promise<User[]> {
    const users: User[] = await prismaClient.user.findMany(args);

    return users;
  }
}
