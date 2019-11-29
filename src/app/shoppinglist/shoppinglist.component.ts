import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',10)
  ];
  @Output() ingredientSelected=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  OnIngredientAdded(ingrdeientData:Ingredient){
    this.ingredients.push(ingrdeientData)
  }
  selectedIng(ingredient:Ingredient){
    this.ingredientSelected.emit(ingredient);
  }
}
