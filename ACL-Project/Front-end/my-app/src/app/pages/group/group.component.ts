import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { AdminService } from '../../authservice/admin.service';
import { LoginService } from "../../authservice/login.service";


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  message:boolean;
  user_root: boolean;
  constructor( private router: Router,
    private ls: LoginService,
    private as: AdminService,
    private ds: DataService
    ) { }


  newgroup: Object  = {} ;
  isAdded: Boolean = false;
  Confirmation: String = "New group has been Registered.";

  post = function(data){
    this.newgroup = {
      "group_name":data.group_name,
    }
    this.ds.createGroup(this.newgroup).subscribe(res => {
       console.log(res);
       this.isAdded=true;
       
    })
  }

  save(){
      //confirm('New user created successfully!')
      alert('New group created successfully!')
   
  }

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

}
