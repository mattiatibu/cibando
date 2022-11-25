import { VideoComponent } from './components/video/video.component';
import { MostraInseritaComponent } from './components/recipes/mostra-inserita/mostra-inserita.component';
import { LoginComponent } from './components/user/login/login.component';
import { NuovaRicettaComponent } from './components/recipes/nuova-ricetta/nuova-ricetta.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ErroreComponent } from './shared/errore/errore.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailsComponent } from './components/recipes/details/detail.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';

import { ResultComponent } from './components/recipes/result/result.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component:DetailsComponent},
    { path: 'result', component:ResultComponent},
    { path: '', pathMatch: 'full',component:RecipesListComponent},
  ]},
  { path: 'registrazione', component:RegistrationComponent},
  { path: 'contatti', component:ContactsComponent},
  { path: 'nuova-ricetta', component:NuovaRicettaComponent},
  { path: 'errore', component: ErroreComponent},
  { path: 'mostra-inserita', component:MostraInseritaComponent},
  { path: 'login', component:LoginComponent},
  { path: 'profilo', component:ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'video', component:VideoComponent, canActivate: [LoggedInGuard]},
  { path: '**', redirectTo: 'home'}
];
//{ path: 'ricette', component: RecipesComponent},
  //{ path: 'dettaglio/:_id', component:DetailsComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
