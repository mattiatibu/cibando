import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-mostra-inserita',
  templateUrl: './mostra-inserita.component.html',
  styleUrls: ['./mostra-inserita.component.scss']
})
export class MostraInseritaComponent implements OnInit {
  iconaChiudi=faClose;
  percorsoDifficolta:string = "../../../../assets/images/difficolta-";

  title:string;
  description:string;
  image:string;
  difficulty:number;

  constructor(private router:Router,private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.riceviDatiRicetta();
  }

  riceviDatiRicetta(){
    this.recipeService.ricettaVoluta.subscribe((res:any)=>{
      this.title=res.title;
      this.description=res.description;
      this.image=res.image;
      this.difficulty=res.difficulty;
    })
  }

  closeModal(){
    this.router.navigate(['/ricette/recipes']);
  }
  inserireAltro(){
    this.router.navigate(['ricette/nuova-ricetta']);
  }
}
