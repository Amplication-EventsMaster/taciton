import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
