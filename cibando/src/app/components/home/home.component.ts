import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  evidenziato= false;

  ricette:Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    console.log('sei entrato nella home');

    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  onEvidenziazione(){
    this.evidenziato=!this.evidenziato;
  }

  ngOnDestroy(): void {
    console.log('sei uscito dalla home');
  }

}
