import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.css']
})
export class NuovaRicettaComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    dataPubblicazione: new FormControl('', [Validators.required]),
    pubblica: new FormControl('')

  }
  );
  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.value);
    const nuova:Recipe= {
      "_id":0,
      "title": this.form.value.title,
      "description": this.form.value.description,
      "image": this.form.value.image,
      "difficulty": Number(this.form.value.difficulty),
      "date":this.form.value.dataPubblicazione,
      "published": Boolean(this.form.value.pubblica)
    }
    const req=this.recipeService.postRecipe(nuova);
    console.log(req);
    //this.router.navigate(['home']);
  }
}
