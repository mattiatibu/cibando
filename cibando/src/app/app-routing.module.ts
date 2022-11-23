import { LoginComponent } from './user/login/login.component';
import { NuovaRicettaComponent } from './components/nuova-ricetta/nuova-ricetta.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ErroreComponent } from './shared/errore/errore.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailsComponent } from './components/recipes/details/detail.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component:DetailsComponent},
    { path: '', pathMatch: 'full',component:RecipesListComponent},
  ]},
  { path: 'registrazione', component:RegistrationComponent},
  { path: 'contatti', component:ContactsComponent},
  { path: 'nuova-ricetta', component:NuovaRicettaComponent},
  { path: 'errore', component: ErroreComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo: 'home'}
];
//{ path: 'ricette', component: RecipesComponent},
  //{ path: 'dettaglio/:_id', component:DetailsComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
