import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  //@HostBinding('disabled') disabled = true;
  @HostBinding("style.background-color") background: string;
  @HostBinding("style.color") color: string;

  constructor() { }

  coloriSfondo=['red','orange','darkred','violet'];
  coloriTesto=['black','white','grey'];

/*
  @HostListener('mouseover') bloccatutto(){
    this.disabled=true;
  }
  @HostListener('mouseleave') sbloccatutto(){
    this.disabled=false;
  }*/

  @HostListener('keydown') cambiaColore(){
    const coloreSfondo=Math.floor(Math.random()* this.coloriSfondo.length);
    const coloreTesto=Math.floor(Math.random()* this.coloriTesto.length);

    this.background=this.coloriSfondo[coloreSfondo];
    this.color=this.coloriTesto[coloreTesto];
  }

}
