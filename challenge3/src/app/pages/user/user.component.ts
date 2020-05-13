import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../../member.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //angForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: MemberService, private router: Router,) {
    //this.createForm();
  }

  newuser: Object  = {} ;
  isAdded: Boolean = false;
  Confirmation: String = "User created successfully.";
 
  ngOnInit(): void {
    
  }

  post = function(data){
    this.newuser = {
      "first_name":data.first_name,
      "last_name":data.last_name,
      "email":data.email,
      "password":data.password,
      "contact_number":data.contact_number
    }

    this.ms.createUser(this.newuser).subscribe(res => {
       console.log(res);
       console.log(this.newuser);
       this.isAdded=true;
       //this.router.navigate(['user-list']);
    })
  }

  save(){
      //confirm('New user created successfully!')
      alert('New user created successfully!')
   
  }

  goToPage(pageName:string): void{

    this.router.navigate([`${pageName}`]);
   }
   
  

}
