import { Component, OnInit } from '@angular/core';
import Member from '../../Member';
import { MemberService } from '../../member.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  users: Member[];
  byid=false;
  getid: any;
  id(event:any){
    this.getid = event.target.value;
  }
  
  isdel: Boolean = false;
  
  imageUrl:string="../assets/img/new_logo.png";
  constructor(private ms: MemberService, private router: Router) { }

  ngOnInit() {
    /*this.ms
      .getMembers()
      .subscribe((data: Member[]) => {
        this.users = data;
      });*/
  }

//GET all
  getall(){         
    this.ms.getUsers().subscribe(res => {
    this.users = res["data"]; 
    console.log("Response", res);
    console.log(this.users)
    });
  }

  //DELETE
  delete(){
    if(confirm('Are you sure to delete user??')){
      this.ms.deleteUser(this.getid).subscribe(res => {
      console.log(res); 
      console.log(this.getid);     
      this.isdel=true;})
      alert('user deleted successfully!!')
  
      }
  }

  // goto page
  goToPage(pageName:string): void{

    this.router.navigate([`${pageName}`]);
   }
   
}
