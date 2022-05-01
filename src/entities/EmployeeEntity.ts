import { Employee } from "@prisma/client";
import { uuid } from "uuidv4";

export class EmployeeEntity {
  public id: string;
  public name: string;
  public email: string;
  public status: boolean;
  public vacation: Date | null;
  public phone: string | null;
  public post: string | null;
  public avatar_url: string | null;
  public address: string | null;
  public a_complement: string | null;
  public a_cep: string | null;
  public a_city: string | null;
  public a_state: string | null;
  public created_at: Date;
  public updated_at: Date;
  public userId: string;

  constructor(
    props: Omit<Employee, "id" | "created_at" | "updated_at">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
