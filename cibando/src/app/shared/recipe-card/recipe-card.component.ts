import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { map,filter } from 'rxjs'
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
  page= 1;
  ricettePerPagina= 4;
  pagingNumber= 0;

  constructor(private recipeService: RecipeService) { }

  ricette$: Observable<Recipe[]>; //$ convenzione per var asincrone
  totRicette: Recipe[]=[];

  ngOnInit(): void {
    if(this.pagina =='home'){
      this.ricette$= this.recipeService.getRecipes().pipe(//pipe di rxjs
            map(res=> res.filter(ricetteFiltrate => ricetteFiltrate.difficulty <= 5 )),
            map(res=> res.slice(0,4)),
            map( res=> this.totRicette=res)
          )
    }else{
      this.ricette$= this.recipeService.getRecipes().pipe(//pipe di rxjs
            map(res=> res.filter(ricetteFiltrate => ricetteFiltrate.difficulty <= 5 )),
            map( res=> this.totRicette=res)
          )
    }


    /*this.recipeService.getRecipes().subscribe({
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
    })*/
  }

  inviaTitolo(titolo:string){
    this.messaggio.emit(titolo);

  }

  pagine(){
    let tot;
    if(this.ricette){
      tot = this.ricette.length;
    }
    this.page=1;
    this.pagingNumber=0;
    this.pagingNumber= Math.ceil(this.ricette.length/this.ricettePerPagina/4);
  }

  paginate(event){
     event.page =event.page + 1;
     this.page = event.page;
     this.ricettePerPagina=event.rows;
 }

}
