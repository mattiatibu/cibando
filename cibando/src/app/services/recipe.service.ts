import { Recipe } from './../models/recipe.model';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiBaseUrl="api/recipes";
  ricettaVoluta= new ReplaySubject();
  constructor(private http:HttpClient) { }

  //prendo tutte le ricette
  getRecipes():Observable<Recipe[]> {
    //return of (RECIPES);
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
    //return this.http.get.Recipe[]=(this.apiBaseUrl+'/robascritta/'+this.id);

  }

  getRecipe(id:string):Observable<Recipe>{
    //const recipe = RECIPES.find(recipe => recipe._id === id);
    //return of (recipe)
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }
}
