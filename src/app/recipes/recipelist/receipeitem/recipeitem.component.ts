import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe:Recipe;  
  constructor(private recipeService:RecipeService) {  }

  ngOnInit() {    
  }
  selectedRecipe(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
