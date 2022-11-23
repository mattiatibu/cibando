import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { DetailsComponent } from './components/recipes/details/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { ErroreComponent } from './shared/errore/errore.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NuovaRicettaComponent } from './components/nuova-ricetta/nuova-ricetta.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecipesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecipeCardComponent,
    DetailsComponent,
    RecipesListComponent,
    ErroreComponent,
    RegistrationComponent,
    ContactsComponent,
    NuovaRicettaComponent,
    ChangeColorDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    PasswordModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
