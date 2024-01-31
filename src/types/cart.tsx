import { Ingredient } from "./ingredient";

export interface Cart extends Ingredient {
  checked: boolean;
}
