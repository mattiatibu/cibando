import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.scss']
})
export class NuovaRicettaComponent implements OnInit {
  percorsoDifficolta:string = "../../../../assets/images/difficolta-";
  submitted=false;
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    pubblica: new FormControl(false)

  }
  );
  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.value);

    this.recipeService.postRecipe(this.form.value).subscribe({
      next: (res) => {
        res = res;

      },
      error: (e) => {
        console.error(e);
      }
    });

    this.submitted=true;
  }

  closeModal(){
    this.submitted=false;
    this.router.navigate(['ricette']);
  }
  inserireAltro(){
    this.submitted=false;
    //this.router.navigate(['nuova-ricetta']);
  }
}
