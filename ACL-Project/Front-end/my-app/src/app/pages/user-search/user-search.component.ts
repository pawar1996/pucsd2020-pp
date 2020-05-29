import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  message: Boolean;
  user_root:boolean;

  getid: number;
  user_info: Boolean = false;
  id(event:any){
    this.getid = event.target.value;
  }

  item: any;
  data: any;
  users: any[];
  resources: any[];
  val : any;
  //u_f_name :any;
  //u_l_name : any;
  r_id : any;
  //u_id : number;
 // val1 : number;
  ptype: any;
  res1: Object = {};

  constructor(private router: Router,
    private ls: LoginService,
    private as: AdminService,
    private ds : DataService
    ) { }

  ngOnInit(): void {
    this.ls.sharedMessage.subscribe(message => this.message = message)
    //console.log("msg",this.message)
    if (this.message == true) {
      this.router.navigate(["login"])
    }
    this.as.sharedMessage.subscribe(user_root => this.user_root = user_root)
    this.val= localStorage.getItem("token");
   // var val1 = Number(this.val);
    
  }

  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

   dialog(data){
     this.data=data;
     console.log("rid",this.data["rid"]);
     console.log("ptype",this.data["rpermission"]);
     console.log("adminuserid",this.val);
     console.log("userid",this.getid);
     /*setpermission = function (data1){

     }*/
   }

   post = function (data1) {
    this.ptype=data1.rtype
    //this.valid=this.val
    this.res1 = {
      //"resource_type_id": this.per,
      "rid" : this.data["rid"],
      "ptype": this.ptype,
     
      "userid": this.getid,
      "adminuserid": this.val1
     // "rpath": this.path,
     // "rtype":this.type,
      //"ruserid":this.user_id
    }
    console.log("ptype",this.res1);
    console.log("ptype",this.res1["userid"]);
    this.ds.createUserpermission(this.res1).subscribe(res => {
      this.item = res["data"];
      console.log("Response", res);
      console.log("items",this.item);
      //console.log(this.item["id"]);
    
    });
   }
   get_info(){
    
    console.log('user_id',this.getid);
    
    
      if (this.getid != undefined){
       
        /*this.ds.getResources().subscribe(res => {
          this.resources = res["data"];
          console.log("Response", res);
          console.log(this.resources)
        });*/
        this.ds.getResourcesById(this.getid).subscribe(res => {
          this.resources = res["message"]
        console.log('res1',res);
        //console.log('AAAAAAAAAAAAAAAA',this.item);
        if (this.resources == undefined) {
          this.user_info=true;
          //this.item = res["data"]
          this.resources = res["data"];
          
          console.log("Response", res);
          console.log("Items ", this.resources["rid"]);
          this.r_id= this.resources["rid"]
          
          if (this.resources["rid"] == undefined) {
          this.ds.getUserById(this.getid).subscribe(res => {
            this.item = res["data"];
            console.log("Response", res);
            console.log("items",this.item);
            //console.log(this.item["id"]);
          
          });
        }
        }else {
          alert("Invalid Credentials...");
        }
         
        });
     
      } else{
        alert("select user id first");
      }
  }
}
