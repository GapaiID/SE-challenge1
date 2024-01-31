import { Ingredient } from "./ingredient";

export interface Recipe {
  id?: string;
  name: string;
  image: string;
  category: string;
  ingredients: Ingredient[];
  steps: string[];
  cookingTime: {
    amount: number;
    unit: string;
  };
  servings: 1;
}
