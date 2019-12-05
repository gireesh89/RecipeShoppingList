import { Route, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { NgModule } from '@angular/core';
import { RecipedetailsComponent } from './recipes/recipedetails/recipedetails.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeResolver } from './recipes/recipe-resolver.service';
import { EditrecipesComponent } from './recipes/editrecipes/editrecipes.component';

const appRoutes: Route[] = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: EditrecipesComponent },
      { path: ':id', component: RecipedetailsComponent },
      { path:':id/edit', component:EditrecipesComponent  }
    ]
  },

  { path: 'shoppinglist', component: ShoppinglistComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}