import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
