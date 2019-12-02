import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  @Input() recipeDetails:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  addToShopping(){   
    this.recipeService.addIngredentsToShopList(this.recipeDetails.ingredients);
  }

}
