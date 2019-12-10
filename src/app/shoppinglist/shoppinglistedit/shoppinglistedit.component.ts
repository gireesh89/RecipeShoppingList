import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  ingredient: Ingredient;
  subscription: Subscription;
  editMode = false;
  editedIndexNumber: number;
  @ViewChild('myForm', { static: false }) myForm: NgForm;
  constructor(private shoplistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoplistService.startedEditing.subscribe(
      (index: number) => {
        this.editedIndexNumber = index;
        this.editMode = true;
        this.ingredient = this.shoplistService.getIngredient(index);
        this.myForm.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        });
      }
    );
  }
  onSubmit() {
    // console.log(this.myForm.value);
    this.ingredient = this.myForm.value;
    if (this.editMode) {
      this.shoplistService.updateIngredient(this.ingredient, this.editedIndexNumber);
    } else {
      this.shoplistService.addIngredient(this.ingredient);
    }
    this.onResetForm();
  }
  onClear() {
   this.onResetForm();
  }
  onDelete() {
      this.shoplistService.deleteIngredient(this.editedIndexNumber);
      this.onResetForm();
  }
  onResetForm() {
    this.myForm.reset();
    this.editMode = false;
  }
}
