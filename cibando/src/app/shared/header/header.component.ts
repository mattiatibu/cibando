import { Router } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from 'src/app/services/recipe.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  user:any;

  title = 'cibando';
  iconaHome = faHouzz;
  iconaScheda = faNewspaper;//ricette
  iconaMail = faMailBulk;
  iconaRegistrato = faRegistered;
  isCollapsed = true;
  testo: string;


  constructor(
    private recipeService: RecipeService,
    private router:Router,
    public authService:AuthService
    ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')!) != null){
      this.user=JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  cerca(){
    const testo = this.testo;
    //da completare
  }

}
