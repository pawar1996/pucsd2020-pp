import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";


@Component({
  selector: 'app-newfile',
  templateUrl: './newfile.component.html',
  styleUrls: ['./newfile.component.scss']
})
export class NewfileComponent implements OnInit {
 
  message: boolean;
  
  constructor(private router:Router,
    private ls: LoginService,
    private as: AdminService,
    private ds: DataService
    ) { }

  resource_name: any;
  resource_path: any;
  resource_parent:number;
  per: any;

  type: any;
  name: any;
  path: any;

  res1: Object = {};
  usrres: Object = {};
  u_id: number;
  item: any;
  res_id: any;
  user_root: boolean;
  per_id: number;
  def:any;
  
  user_id:number;

  // go to page
  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

  ngOnInit(): void {
    this.ls.sharedMessage.subscribe(message => this.message = message)
    //console.log("msg",this.message)
    if (this.message == true) {
      this.router.navigate(["login"])
    }
    this.as.sharedMessage.subscribe(user_root => this.user_root = user_root)
  }

  
  post = function (data) {

    /*if (data.as == "file") {
      this.per = 1
    } else {
      this.per = 2
    }*/
    this.name = data.rname
    this.path = data.rpath
    this.type = data.rtype
    this.user_id=data.ruserid
    
    this.res1 = {
      //"resource_type_id": this.per,
      "rname": this.name,
      "rpath": this.path,
      "rtype":this.type,
      "ruserid":this.user_id
    }
    //this.u_id = this.ds.getValue()
    //console.log("root_id",this.u_id)
    
    console.log("name", this.name);
    console.log("path", this.path);
    console.log("type", this.type);

    this.ds.createResources(this.res1).subscribe(res => {
      this.item = res["message"]
      console.log("ITEM",this.item);
      if (this.item == undefined) {

        this.resr = res["data"];
        // console.log("Response", res);
        console.log(res)
        this.res_id = Number(this.resr["id"])
        //this.per_id = 111
        /*this.usrres = {
          "resource_id": this.res_id,
          "user_id": this.u_id,
          "permission_id": this.per_id,
        }
        this.ds.createUserpermission(this.usrres).subscribe(result => {
          this.def = result["data"];
          console.log(this.def)
          alert("Resource Added...")
        });*/
        alert("Resource created successfully...")

      } else {
        alert("Invalid Path...")
      }
    });

  }

  save(){
    //confirm('New user created successfully!')
    
    confirm('Are you want to create new resource??')
    //alert('create new resource')

}
}
