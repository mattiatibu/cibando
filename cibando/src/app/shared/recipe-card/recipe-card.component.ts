import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  //@Input() recipes:Recipe[];
  @Input() pagina:string;

  @Output() messaggio = new EventEmitter();
  percorsoDifficolta:string = "../../../../assets/images/difficolta-";
  ricette:Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    console.log('sei entrato nella home');

    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        if(this.pagina==='home'){
          this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
        }else{
          this.ricette = this.ricette.sort((a,b) => a._id - b._id);
        }
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  inviaTitolo(titolo:string){
    this.messaggio.emit(titolo);

  }
}
