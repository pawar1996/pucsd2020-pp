import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { observable } from 'rxjs';
import { Router, NavigationEnd } from "@angular/router";
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  private id_of_user;

  private message = new BehaviorSubject(false);
    sharedMessage = this.message.asObservable();
  
constructor(
  private httpClient: HttpClient,
  private router: Router
) { }

nextMessage(message: boolean) {
  this.message.next(message)

}
/*public setValue(id:number){
  this.id_of_user = id;
}

public getValue(){
  return this.id_of_user;
}*/

}

