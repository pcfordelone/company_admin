import { User } from "@prisma/client";
import { uuid } from "uuidv4";

export class UserEntity {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public role: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    props: Omit<User, "id" | "created_at" | "updated_at">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
