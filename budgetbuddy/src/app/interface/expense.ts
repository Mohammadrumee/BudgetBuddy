import { Category } from "../enum/category";

export interface Expense {

    amount      :number,
    description :string,
    category    :Category
}
