import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/receipeitem/recipeitem.component';
import { RecipedetailsComponent } from './recipes/recipedetails/recipedetails.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import {HeaderComponent} from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeResolver } from './recipes/recipe-resolver.service';
import { EditrecipesComponent } from './recipes/editrecipes/editrecipes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailsComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    DropdownDirective,
    RecipeStartComponent,
    EditrecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
