import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  evidenziato= false;
  nome:string;
  email:string;

  //ricette:Recipe[] = [];

  constructor(private recipeService: RecipeService, private userService:UserService) { }

  ngOnInit(): void {
    console.log('sei entrato nella home');

    /*this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (e) => {
        console.error(e);
      }
    })*/

    this.riceviDatiUtente();
  }

  onEvidenziazione(){
    this.evidenziato=!this.evidenziato;
  }

  ngOnDestroy(): void {
    console.log('sei uscito dalla home');
  }
  //recupero dato daò subjecxt e lo immagazino nelle localstorage
  riceviDatiUtente(){
    this.userService.datiUtente.subscribe((res:any)=>{
      //localStorage.setItem('nome',res.nome);
      //localStorage.setItem('email',res.email);
      this.nome=res.nome;
      this.email=res.email;
    });

    /*if(localStorage.getItem('nome')){
      this.nome=localStorage.getItem('nome');
      this.email=localStorage.getItem('email');

    }*/
  }

  closeModal(){
    //localStorage.removeItem('nome');
    //localStorage.removeItem('email');
    //localStorage.clear();
    this.nome='';
    this.email='';
  }
}
