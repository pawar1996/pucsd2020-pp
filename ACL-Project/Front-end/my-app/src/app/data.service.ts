import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {user_detail} from './data';
import {resource} from './data';
import {Group} from './data';
import {Usergroup} from './data';
import {Grouppermission} from './data';
import {resource_permission} from './data';
import {UserAuthorize} from './data';
import {UserAuthorizeResponse} from './data';
import {Permision} from './data';

//import { User } from './data';
//import {Resources} from './data';
//import { Data } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'webapi/v1/';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'

    })
  }
  
  
/// ****************for user*****************
////  get user by id
public getUserById(id: number) {
  return this.http.get(`${this.url}user/${id}`);   
}

// for get login data
public login_authorize(data: UserAuthorize){
  return this.http.post(`${this.url}user/authorize`,data);
}
//create user
/*public createUser(user: User){
  return this.http.post(`${this.url}user`,user);

}*/
 public createUser(user: user_detail){
    return this.http.post(`${this.url}user`,user);

}
//edit user
public updateUser(user: user_detail) {
  return this.http.put(`${this.url}user/${user.id}`, user);
}
// delete user
public deleteUser(id: number) {
  return this.http.delete(`${this.url}user/${id}`);
}
// get all users
public getUsers() {
  return this.http.get(`${this.url}user`);
}
//******************************************************* 
// ************ for group ***************
// create group
public createGroup(group: Group) {
  return this.http.post(`${this.url}groups`, group);

}
// edit group
public updateGroup(group: Group) {
  return this.http.put(`${this.url}groups/${group.id}`, group);
}
//delete group
public deleteGroup(id: number) {
  return this.http.delete(`${this.url}groups/${id}`);
}
//get group by id
public getGroupById(id: number) {
  return this.http.get(`${this.url}/groups/${id}`);   
}
//get all groups
public getGroup() {
  return this.http.get(`${this.url}groups`);
}
//***************************************************
/// ****************for resources*****************
//create resources
/*public createResources(data: Resources) {
  return this.http.post(`${this.url}resource`, data);
}*/
public createResources(data: resource) {
  return this.http.post(`${this.url}resource`, data);
}
// edit resources
public updateResources(data: resource) {
  return this.http.put(`${this.url}resource/${data.rid}`, data);
}
// delete resources
public deleteResources(id: number) {
  return this.http.delete(`${this.url}resource/${id}`);
}
// get resource by id
public getResourcesById(id: number) {
  return this.http.get(`${this.url}resource/user/${id}`);   //endpoint
}
// get all resources
public getResources() {
  return this.http.get(`${this.url}resource`);
}
///***************************************************************
  //************ for usergroup**********************************
  //  for usergroup

  public addUserGroup(newusergroup: Usergroup) {
    return this.http.post(`${this.url}usergroup`, newusergroup);
  }
  // edit usergroup
  public updateUserGroup(group: Usergroup) {
    return this.http.put(`${this.url}usergroup/${group.id}`, group);
  }
  // delete usergroup
  public deleteUserGroup(id: number) {
    return this.http.delete(`${this.url}usergroup/${id}`);
  }
  // get by id usergroup
  public getUserGroupById(id: number) {
    return this.http.get(`${this.url}/usergroup/${id}`);  
  }
  // get all usergroup
  public getUserGroup() {
    return this.http.get(`${this.url}usergroup`);
  }
//**********************************************************
//*******************for user permissions*************************** */
// create userpermission
public createUserpermission(data: resource_permission) {
  return this.http.post(`${this.url}permision`, data);
}
// edit userpermission
public updateUserpermission(data: resource_permission) {
  return this.http.put(`${this.url}userpermission/${data.rid}`, data);
}
// delete userpermission
public deleteUserpermission(id: number) {
  return this.http.delete(`${this.url}userpermission/${id}`);
}
// get by id userpermission
public getUserpermissionById(id: number) {
  return this.http.get(`${this.url}/userpermission/${id}`);   
}
// get all userpermission
public getUserpermission() {
  return this.http.get(`${this.url}userpermission`);
}
//****************************************************************
// services for grouppermission
// create grouppermission
public createGroupPermission(data: Grouppermission) {
  return this.http.post(`${this.url}grouppermission`, data);
}
// edit grouppermission
public updateGrouppermission(data: Grouppermission) {
  return this.http.put(`${this.url}grouppermission/${data.id}`, data);
}
// delete grouppermission
public deleteGrouppermission(id: number) {
  return this.http.delete(`${this.url}grouppermission/${id}`);
}
// get by id grouppermission
public getGrouppermissionById(id: number) {
  return this.http.get(`${this.url}/grouppermission/${id}`);   
}
// get all grouppermission
public getGrouppermission() {
  return this.http.get(`${this.url}grouppermission`);
}



}

