import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a Test Recipe', 'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg'),
    new Recipe('Pasta','Pasta is a wonderful Dish','https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  selectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
