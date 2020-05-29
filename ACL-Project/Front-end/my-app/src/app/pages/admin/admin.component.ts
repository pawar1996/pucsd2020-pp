import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  message: boolean;
  u_id : any;
  file: boolean;
  val: any;
  per: any;
  fp:number;
  user_root:boolean;
  //val : any;
  constructor(private router:Router,
    private ls: LoginService,
    private as: AdminService,
    private ds : DataService,
    private fb: FormBuilder,
    
    ) {  }  
  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

  ngOnInit(): void {

  
    this.as.sharedMessage.subscribe(user_root => this.user_root = user_root)

    if (this.user_root == true) {
      this.router.navigate(["login"])
    }
    this.ls.sharedMessage.subscribe(message => this.message = message)

    this.val= localStorage.getItem("token");
              console.log("val",this.val)
  }


  rvalue: number;
  resr: any;
  rs: any;
  rname : any;
  resources: Boolean = false;
  rtype : any;
  item: any;
  groups : Boolean = false;
  getmyres(){
    //this.u_id = this.as.getValue() 
    this.resources=true;
    this.groups=false;
    /*this.ds.getUserpermissionById(this.u_id).subscribe(res => {
      this.resr = res["data"];
      // console.log("Response", res);
      console.log(this.resr)
      this.val = this.resr["permission_id"]
      if(this.val == 100){
        this.per = "read"
      }else if(this.val == 110 ){
        this.per = "write"
      }else{
        this.per = "read  write  execute"
      }
      this.fp = this.resr["resource_id"]
      this.rvalue = Number(this.fp)*/
         
      this.ds.getResourcesById(this.val).subscribe(rp => {
        this.item = rp["message"]
        if (this.item == undefined) {
        this.item = rp["data"];
        
        console.log("Response", rp);
        console.log("Items ", this.item);
      
        }
    /*this.ds.getResourcesById(this.rvalue).subscribe(rp => {
      this.item = res["message"]
      if (this.item == undefined) {
        
        this.rs = rp["data"];
        console.log("Response", rp);
        console.log(this.rs)
        this.rname = this.rs["resource_name"]
        this.rtype = this.rs["resource_type_id"]
        // console.log("value",typeof(this.rvalue))
        if(this.rtype == 1){
          this.file = true
        }else{
          this.file = false
        }
      }*/else{
        alert("No Resources made by you...");
      }
    });

  //});
  }

  getmygrp(){
    //this.u_id = this.as.getValue()
    this.groups=true;
    this.resources=false;
    this.ds.getGroup().subscribe(rp => {
    
    });
  }

}
