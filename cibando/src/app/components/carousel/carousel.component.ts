import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {id: 1,
    label: "Spaghetti al sugo"},
    {id: 2,
    label: "tagliata di manzo"},
    {id: 3,
    label: "tiramisu classico"}
  ];
  frecce=true;
  indicatore=true;
  mostraCarosello():boolean{
    if(this.images.length==1){
      return false
    }else{
      return true;
    }
  }

  percorso= '../assets/images/carousel-';
}
