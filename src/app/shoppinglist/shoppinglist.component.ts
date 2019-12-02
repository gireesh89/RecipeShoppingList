import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']  
})
export class ShoppinglistComponent implements OnInit { 
  ingredients:Ingredient[];
  constructor(private shoplistService:ShoppingListService ) { }

  ngOnInit() {    
    this.ingredients=this.shoplistService.getIngredients()
    this.shoplistService.ingredientChanged
    .subscribe((ingredient:Ingredient[]) => {
      this.ingredients=ingredient
    })
  }
}
