import { Injectable } from '@angular/core';
import { Subject,ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //datiUtente= new Subject();
  datiUtente= new ReplaySubject();
  apiBaseUrl="api/users";


  constructor(private http:HttpClient) { }

  nuovoUtente(dati:any):Observable<any>{

    return this.http.post<any>(`${this.apiBaseUrl}/signup`,dati);
  }
}
