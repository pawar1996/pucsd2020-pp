import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";

//import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  message: boolean;
  u_id : any;
  file: boolean;
  val: any;
  per: any;
  fp:number;
  user_root:boolean;

  constructor(private router:Router,
    private ls: LoginService,
    private as: AdminService,
    private ds : DataService
    ) { }


  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

   rvalue: number;
  resr: any;
  rs: any;
  rname : any;
  resource: Boolean = false;
  rtype : any;
  //item: any[];
  groups : Boolean = false;
  resources: any[];
  group: any[];
 
  ngOnInit(): void {
    this.ls.sharedMessage.subscribe(message => this.message = message)

    if (this.message == true) {
      this.router.navigate(["login"])
    }
    this.as.sharedMessage.subscribe(user_root => this.user_root = user_root)

  }


  getmyres(){
    //this.u_id = this.ds.getValue()
    
    //console.log("root_id",this.u_id)
    this.val= localStorage.getItem("token");
    console.log("val",this.val)
    this.groups=false;
    this.resource=true;
    this.ds.getResources().subscribe(res => {
      this.resources = res["data"];
      console.log("Response", res);
      console.log(this.resources);
    });
    
    /*this.ds.getUserById(this.val).subscribe(res => {
      this.item = res["data"];
      console.log("Response", res);
      console.log("items",this.item);

    });*/

    
  }
  getmygrp(){
    //this.u_id = this.as.getValue()
    this.groups=true;
    this.resource=false;
    this.ds.getGroup().subscribe(res => {
      this.group = res["data"];
      console.log("Response", res);
      console.log(this.group)
    });
  }
}
