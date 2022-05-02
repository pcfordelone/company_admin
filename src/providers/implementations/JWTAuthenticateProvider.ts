import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { IAuthenticateProvider } from "../IAuthenticateProvider";

export class JWTAuthenticateProvider implements IAuthenticateProvider {
  async authenticate(
    user: User
  ): Promise<{ token: string; user: User } | { error: Error }> {
    const secret: string = process.env.JWT_SECRET;

    const token: string = await sign(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      secret,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { token, user };
  }
}
