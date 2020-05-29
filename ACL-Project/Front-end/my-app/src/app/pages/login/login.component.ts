import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
     private ds : DataService,
      private router: Router,
      private ls : LoginService,
      private as : AdminService
      ) { }

  message: boolean;
  user_root: boolean;

  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

     ngOnInit(): void {
    this.ls.sharedMessage.subscribe(islogin => this.message = this.message)
    this.as.sharedMessage.subscribe(rt => this.user_root = this.user_root)
  
  }

  root_user_type: string;
  root_user : number;
  //id: any;
  email: string
  password: String;
  //onlogin: number = 0;
  item: any;
  is_id: number;
  //is_pass: any;
  //stat: any;
  res1: Object = {};
  validation = function (data) {
    
    this.email = data.email,
      this.password = data.password
      ////console.log('user id',data.id);
      
      this.res1 = {
        "email": this.email,
        "password": this.password,
      }
    
      this.ds.login_authorize(this.res1).subscribe(res => {
        this.item = res["message"]
        //console.log('res1',this.res1);
        //console.log('AAAAAAAAAAAAAAAA',this.item);
        if (this.item == undefined) {
          console.log("True");
          this.item = res["data"]
          this.is_id = this.item["Id"]
          //this.is_pass = this.item["password"]
          this.root_user_type = this.item["usertype"]
         console.log("Response", res);
        console.log("Items ", this.item);
        console.log("User Id", this.is_id);
        //console.log("Pass", this.is_pass);
        console.log("Root", this.root_user_type);

        //if (this.password == this.is_pass ) {
            //this.ls.nextMessage(true)
            //this.ds.setValue(this.is_id)
            var token = this.is_id;
            
          localStorage.setItem("token", token);
              this.val= localStorage.getItem("token");

              console.log("val",this.val)
            if (this.root_user_type == "admin") {
              //if (this.root_user == 1) {
              this.as.isRoot(true);
              //this.as.setValue(this.is_id)
              this.router.navigate(["home"])
            }
            else if (this.root_user_type == "user" ){
              //else if (this.root_user == 0){
              this.ls.nextMessage(true);
              //this.as.setValue(this.is_id)
              this.router.navigate(["portal"]);
            }
             
          } else {
            alert("Invalid Credentials...");
            data.password="";
            //this.goToPage("login");
            //this.router.navigate(["/"]);
          }
      });
    }
    

  }
