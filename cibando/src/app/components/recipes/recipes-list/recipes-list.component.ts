import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  ricette:Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    console.log('sei entrato nelle ricette');

    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette=res;
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

}
