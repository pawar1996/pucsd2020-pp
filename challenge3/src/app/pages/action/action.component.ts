import { Component, OnInit } from '@angular/core';
import {Router, DefaultUrlSerializer} from '@angular/router';
import { MemberService } from '../../member.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  getid: number;
  isdel: Boolean = false;
  Confirmation: String = "User Deleted Successfully.";

  id(event:any){
    this.getid = event.target.value;
  }

  constructor(private fb: FormBuilder, private ms: MemberService, private router: Router,) { }
  
  // goto page
  goToPage(pageName:string): void{

    this.router.navigate([`${pageName}`]);
   }


  //delete
  delete(){
    if(confirm('Are you sure to delete user??')){
      this.ms.deleteUser(this.getid).subscribe(res => {
      console.log(res);      
      this.isdel=true;})
      alert('user deleted successfully!!')
      
      }
    
  }
  

  ngOnInit(): void {
  }

  

}
