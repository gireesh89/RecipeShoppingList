import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: false }) ingredientAmount: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  addIngredient() {
    const ingName=this.ingredientName.nativeElement.value;
    const ingAmount=this.ingredientAmount.nativeElement.value;
    const newIngredeint= new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredeint);
  }

}
