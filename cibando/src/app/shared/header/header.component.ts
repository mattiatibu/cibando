import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'cibando';
  iconaHome = faHouzz;
  iconaScheda = faNewspaper;//ricette
  iconaMail = faMailBulk;
  iconaRegistrato = faRegistered;

  constructor() { }

  ngOnInit(): void {
  }

}
