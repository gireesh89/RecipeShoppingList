import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {  
  recipes: Recipe[];
  constructor(private recipeService:RecipeService, private route:Router,private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  onAddnewRecipe(){
      this.route.navigate(['new'],{relativeTo:this.actroute})
  }
}
