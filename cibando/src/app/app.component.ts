import { Component } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';
  iconaHome = faHouzz;
  iconaScheda = faNewspaper;//ricette
  iconaMail = faMailBulk;
  iconaRegistrato = faRegistered;
  evidenziato= false;

  onEvidenziazione(){
    this.evidenziato=!this.evidenziato;
  }
}
