import { MostraInseritaComponent } from '../mostra-inserita/mostra-inserita.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.scss']
})
export class NuovaRicettaComponent implements OnInit {

  //iconaChiudi=faClose;
  //percorsoDifficolta:string = "../../../../assets/images/difficolta-";
  //submitted=false;

  editor= ClassicEditor;


editorConfig = {
  toolbar: {
      items: [
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'undo',
          'redo',
      ]
  },
  image: {
      toolbar: [
          'imageStyle:full',
          'imageStyle:side',
          '|',
          'imageTextAlternative'
      ]
  },
  table: {
      contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
      ]
  },
  height: 300,
};

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
    /*this.form.patchValue(){
      title:'qualcosa';
    }*/
  }
  onSubmit(){
    console.log(this.form.value);
    const ricetta={
      title: this.form.value.title,
      description:  this.form.value.description,
      difficulty:  this.form.value.difficulty,
      image:  this.form.value.image,
    }
    this.recipeService.ricettaVoluta.next(ricetta);
    this.recipeService.postRecipe(this.form.value).subscribe({
      next: (res) => {
        res = res;

      },
      error: (e) => {
        console.error(e);
      }
    });

    //this.submitted=true;
    //this.inviaDatiRicetta();
    this.router.navigate(['ricette/mostra-inserita']);
  }

  /*inviaDatiRicetta(){
    localStorage.setItem('title',this.form.value.title);
    localStorage.setItem('description',this.form.value.description);
    localStorage.setItem('image',this.form.value.image);
    localStorage.setItem('difficulty',this.form.value.difficulty);

  }*/
  /*
  closeModal(){
    this.submitted=false;
    this.router.navigate(['ricette']);
  }
  inserireAltro(){
    this.submitted=false;
    //this.router.navigate(['nuova-ricetta']);
  }*/
}
