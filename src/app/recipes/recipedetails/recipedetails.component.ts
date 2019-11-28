import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  @Input() recipeDetails:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
