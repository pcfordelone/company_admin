import { User } from "@prisma/client";

export interface IAuthenticateProvider {
  authenticate(
    user: User
  ): Promise<{ token: string; user: User } | { error: Error }>;
}
