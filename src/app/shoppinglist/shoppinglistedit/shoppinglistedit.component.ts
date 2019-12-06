import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {  
  @ViewChild('nameInput', { static: false }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: false }) ingredientAmount: ElementRef;
  constructor(private shoplistService:ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient() {
    const ingName=this.ingredientName.nativeElement.value;
    const ingAmount=this.ingredientAmount.nativeElement.value;
    const newIngredient= new Ingredient(ingName, ingAmount);
    this.shoplistService.addIngredient(newIngredient);
  }

}
