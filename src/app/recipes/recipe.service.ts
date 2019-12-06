import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(1, 'Grilled Chicken', 'Grilled Chikcen is very Declious and Tasty Dish',
            'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg',
            [new Ingredient('Chicken', 1), new Ingredient('Garlic', 2)]),
        new Recipe(2, 'Pasta', 'Pasta is a wonderful Dish',
            'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg',
            [new Ingredient('Flour', 2), new Ingredient('Egg', 3)])
    ];
    constructor(private shopListService: ShoppingListService) { }
    getRecipe(id: number) {
        const recipe = this.recipes.find(
            (s) => {
                return s.id === id;
            }
        );
        return recipe;
    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredentsToShopList(ingredients: Ingredient[]) {
        this.shopListService.addIngredients(ingredients);
    }

}