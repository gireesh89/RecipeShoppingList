import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']  
})
export class ShoppinglistComponent implements OnInit,OnDestroy { 
  ingredients:Ingredient[];
  private igChnagedSub:Subscription;
  constructor(private shoplistService:ShoppingListService ) { }

  ngOnInit() {    
    this.ingredients=this.shoplistService.getIngredients()
    this.igChnagedSub=this.shoplistService.ingredientChanged
    .subscribe((ingredient:Ingredient[]) => {
      this.ingredients=ingredient
    })
  }

  ngOnDestroy(){
    this.igChnagedSub.unsubscribe();
  }
}
