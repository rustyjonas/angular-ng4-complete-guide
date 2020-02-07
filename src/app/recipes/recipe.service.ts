import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipeeeeeee',
    'This is simply a test',
    'https://www.spendwithpennies.com/wp-content/uploads/2018/09/SpendWithPennies-Easy-Meatloaf-Recipe-22.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Friees', 20),
    ]),
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://www.spendwithpennies.com/wp-content/uploads/2018/09/SpendWithPennies-Easy-Meatloaf-Recipe-22.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
    ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngrediets(ingredients);
  }
}
