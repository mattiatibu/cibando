import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/logged-in.guard';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NuovaRicettaComponent } from './nuova-ricetta/nuova-ricetta.component';
import { ResultComponent } from './result/result.component';
import { DetailsComponent } from './details/detail.component';
import { MostraInseritaComponent } from './mostra-inserita/mostra-inserita.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: 'recipes', component:RecipesListComponent},
    { path: 'dettaglio/:title/:_id', component:DetailsComponent},
    { path: 'result', component:ResultComponent},
    { path: 'nuova-ricetta', component:NuovaRicettaComponent},
    { path: 'mostra-inserita', component:MostraInseritaComponent},
    { path: '', pathMatch: 'full',component:RecipesListComponent},
  ]},

];
//{ path: 'ricette', component: RecipesComponent},
  //{ path: 'dettaglio/:_id', component:DetailsComponent},
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipeRoutingModule {}
