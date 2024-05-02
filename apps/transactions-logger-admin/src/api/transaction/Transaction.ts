import { Customer } from "../customer/Customer";

export type Transaction = {
  amount: string | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
