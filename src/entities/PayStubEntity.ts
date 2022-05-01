import { PayStub } from "@prisma/client";

export class PayStubEntity {
  id: string;
  date: Date;
  url: string;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
  employeeId: string;

  constructor(
    props: Omit<PayStub, "id" | "created_at" | "updated_at">,
    id?: string
  ) {}
}
