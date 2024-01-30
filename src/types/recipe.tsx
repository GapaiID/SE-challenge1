export interface Recipe {
  id?: string;
  name: string;
  image: string;
  category: string;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  steps: string[];
  cookingTime: {
    amount: number;
    unit: string;
  };
  servings: 1;
}
