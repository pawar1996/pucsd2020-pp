import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MemberService } from '../../member.service';
import Member from 'src/app/Member';


@Component({
  selector: 'app-filter-id',
  templateUrl: './filter-id.component.html',
  styleUrls: ['./filter-id.component.scss']
})


export class FilterIdComponent implements OnInit {

  imageUrl:string="../assets/img/new_logo.png";
  //byid=true;
  
  users: Member[];
   item : Member;
  item1: Member;
  constructor(private route:ActivatedRoute, private router:Router, private ms:MemberService ){}
  getid: any;
  id(event:any){
    this.getid = event.target.value;
  }
  
  isdel: Boolean = false;
 
  //Confirmation: String = "User Deleted Successfully.";

  //goto page
  goToPage(pageName:string): void{
   this.router.navigate([`${pageName}`]);
  }
 

  //for GET by ID
  getbyid(){
    //this.byid = true;
    console.log(this.getid);
    this.ms.getUserById(this.getid).subscribe( res => {
      this.item = res["data"] 
      console.log("Response", res);
      console.log("Items ",this.item);
      //console.log(this.users)
      return this.item;

      
    });
   }

  //for DELETE

  delete(){
  if(confirm('Are you sure to delete user??')){
    this.ms.deleteUser(this.getid).subscribe(res => {
    console.log(res);      
    this.isdel=true;})
    alert('user deleted successfully!!')

    }
}
  

  ngOnInit(): void {
    /*this.item1= this.route.snapshot.params['foo'];
    console.log("item1", this.item1);*/
  }

}
