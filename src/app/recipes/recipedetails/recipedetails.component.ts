import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  recipeDetails: Recipe;
  constructor(private recipeService: RecipeService, private actroute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.actroute.params.subscribe(
      (params: Params) => {
        this.recipeDetails = this.recipeService.getRecipe(+params['id']);
      }
    )
  }
  addToShopping() {
    this.recipeService.addIngredentsToShopList(this.recipeDetails.ingredients);
  }
  editRecipe() {
    this.route.navigate(['edit'], { relativeTo: this.actroute, queryParamsHandling: 'preserve' });
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(+this.actroute.params['id']);
    this.route.navigate(['../'], {relativeTo: this.actroute});
  }

}
