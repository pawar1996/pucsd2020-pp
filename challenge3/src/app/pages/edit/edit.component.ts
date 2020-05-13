import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MemberService } from '../../member.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router,private ms: MemberService) { }
  updateuser: Object  = {} ;
  isUpdated: Boolean = false;
  id1:number;
  //Confirmation: String = "User details has been Updated.";

  //PUT
  put = function(data){
    this.updateuser = {
      "id":data.id,
      "first_name":data.first_name,
      "last_name":data.last_name,
      "email":data.email,
      "password":data.password,
      "contact_number":data.contact_number
    }

    this.ms.updateUser(this.updateuser).subscribe(res => {
       console.log(res);    
       //console.log(this.id1,'id1');
       console.log(this.id,'id');     
       this.isUpdated=true;
       
    })
  }

  //goto page
  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

   save(){
    //confirm('New user created successfully!')
    alert('User edited successfully!')
 
}

  ngOnInit(): void {
    this.id1= this.route.snapshot.params['foo'];
  }

}
