import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MemberService } from '../../member.service';
import Member from 'src/app/Member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  byid=true;
  users: Member[];
  item : Member;
  getid: any;
  id(event:any){
    this.getid = event.target.value;
    //alert(this.getid);
  }

  //about:any='yashashri';
  constructor(private router:Router, private ms:MemberService) { }

  ngOnInit(): void {
  }

  goToPage(pageName:string): void{

    this.router.navigate([`${pageName}`]);
   }

//for filter by id
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

// for sending value to nxt page


}
