/*export default class Data {
  id : number;
  first_name : string;
  last_name : string;
  email : string;
  password : string;
  contact_number : number;
  updated_by : number;

   
  }*/

export class user_detail {
    id : number;
    first_name : string;
    last_name : string;
    email : string;
    password : string;
    usertype : string;
    updated_by : number;
}
export class resource {
  rid:Number;
  rname :String;
  rtype : String;
	rpath : string;
}

export class UserAuthorize {
  email   :string;
	password: string
}
export class UserAuthorizeResponse {
  id  : number;
	first_name: string ;
  last_name:  string ;
  email   :string;
  usertype: string;

}


/*export class User {
  id : number;
  first_name : string;
  last_name : string;
  email : string;
  password : string;
  is_user_root : number;
  updated_by : number;
}*/
/*export class Resources {
  id:Number;
    resource_type_id:Number;
    resource_name :String
    resource_path : String;
    updated_by:Number;
}*/


export class Group {
  id : number;
  groups_name : string;
  updated_by : number;
}

export class Usergroup {
  id : number;
  user_id : number;
}

export class Grouppermission {
  resource_id : number;
  id : number;
  permission_id: number;

}

export class resource_permission{
	rid:number;
	ptype :string;
  userid : number;
  //adminuserid :number;
  }
  export class Permision {
    rid : number;
    ptype : string;
    userid : number;
    adminuserid: number;
  }