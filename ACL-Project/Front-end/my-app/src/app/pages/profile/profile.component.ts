import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 
  val: any;
  item: any;
  constructor( private router: Router,
    private ls: LoginService,
    private as: AdminService,
    private ds : DataService,
    
    ) { }

    
    message: boolean;
    user_root:boolean;
  ngOnInit(): void {
    this.ls.sharedMessage.subscribe(message => this.message = message)
    if (this.message == true) {
      this.router.navigate(["login"])
    }
    this.as.sharedMessage.subscribe(user_root => this.user_root = user_root)
    this.val= localStorage.getItem("token");
    console.log("val",this.val)
    this.getdata();
  
  }

  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }


getdata(){
   this.val= localStorage.getItem("token");
    console.log("val",this.val)
    this.ds.getUserById(this.val).subscribe(res => {
      this.item = res["data"];
      console.log("Response", res);
      console.log("items",this.item);
      console.log(this.item["id"]);

    });
  }
    
}
