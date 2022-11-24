import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mostra-inserita',
  templateUrl: './mostra-inserita.component.html',
  styleUrls: ['./mostra-inserita.component.scss']
})
export class MostraInseritaComponent implements OnInit {
  iconaChiudi=faClose;
  percorsoDifficolta:string = "../../../../assets/images/difficolta-";

  title:string;
  description:string;
  image:string;
  difficulty:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.riceviDatiRicetta();
  }

  riceviDatiRicetta(){
    this.title=localStorage.getItem('title');
    this.description=localStorage.getItem('description');
    this.image=localStorage.getItem('image');
    this.difficulty=Number(localStorage.getItem('difficulty'));

    localStorage.removeItem('title');
    localStorage.removeItem('description');
    localStorage.removeItem('image');
    localStorage.removeItem('difficulty');
  }

  closeModal(){
    this.router.navigate(['ricette']);
  }
  inserireAltro(){
    this.router.navigate(['nuova-ricetta']);
  }
}
