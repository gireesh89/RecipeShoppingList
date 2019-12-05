import { Recipe } from './recipe.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe>{
    constructor(private recipeService:RecipeService,private route:ActivatedRoute){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Recipe> | Promise<Recipe> | Recipe{
        return this.recipeService.getRecipe(+route.params['id']);
    }
}