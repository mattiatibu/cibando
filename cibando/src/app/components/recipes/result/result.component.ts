import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  ricette:Recipe[]=[];
  testo:string;
  constructor(
    private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService,
    private router:Router) { }

  ngOnInit(): void {
    this.onGetRecipes();
  }

  onGetRecipes(): void {
    this.recipeService.cerca.subscribe(
     (res:any) => {
        this.recipeService.searchRecipes(this.testo).subscribe({
          next:(res)=>{
            this.ricette=res;
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    )
  }
}
