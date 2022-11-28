import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import {ToastModule} from 'primeng/toast';
import {PaginatorModule} from 'primeng/paginator';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NuovaRicettaComponent } from './nuova-ricetta/nuova-ricetta.component';
import { RecipeCardComponent } from 'src/app/shared/recipe-card/recipe-card.component';
import { ResultComponent } from './result/result.component';
import { DetailsComponent } from './details/detail.component';
import { MostraInseritaComponent } from './mostra-inserita/mostra-inserita.component';
import { RecipesComponent } from './recipes.component';
import { ErroreComponent } from 'src/app/shared/errore/errore.component';
import { RecipeRoutingModule } from './recipes-routing.module';
@NgModule({
  declarations: [
    RecipeCardComponent,
    DetailsComponent,
    RecipesListComponent,
    NuovaRicettaComponent,
    MostraInseritaComponent,
    ResultComponent,
    RecipesComponent,
    ErroreComponent
  ],
  imports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    PaginatorModule,
    CKEditorModule,
    RecipeRoutingModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [RecipeCardComponent,ErroreComponent,NuovaRicettaComponent]

})

export class RecipeModule{};
