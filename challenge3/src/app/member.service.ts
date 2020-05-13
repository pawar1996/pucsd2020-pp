import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Member from './Member';



@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private url: string = 'webapi/v1/';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'

    })
}

//POST
public createUser(user: Member){
    return this.http.post(`${this.url}user`,user);

}
// GET All
public getUsers(){
  
  return this.http.get(`${this.url}user`); 
}

//GET BY ID
public getUserById(id: number){
  return this.http.get(`${this.url}user/${id}`); 
  
}

//PUT
public updateUser(user: Member){
  return this.http.put(`${this.url}user/${user.id}`,user);
}

//DELETE
public deleteUser(id: number){
  return this.http.delete(`${this.url}user/${id}`);
}

  /*addMember(firstName,lastName, email, password, contact_number, updated_by) {
    const obj = {
      firstName,
      lastName,
      email,
      password,
      contact_number,
      updated_by
    };
    console.log(obj);
    this.http.post(`${this.url}user`, obj, this.httpOptions)
      .subscribe(res => console.log('Done'));
  }*/

/*getMembers() {
  return this
    .http.get(`${this.url}user`, this.httpOptions);
    
}*/






}


