import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('', [Validators.required])

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }
/*
  onSubmit(form){
    console.log(form);
  }*/
}
