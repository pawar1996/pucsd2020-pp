// TO DISTINGUISH BETWEEN ADMIN OR NORMAL USER
CREATE TABLE IF NOT EXISTS usertype(
	type varchar(20) PRIMARY KEY
	);

CREATE TABLE IF NOT EXISTS user(

	uname text(20) PRIMARY KEY,
	upassword varchar(50),
	usertype varchar(20) ,// for admin and normal user
	CONSTRAINT fk_usertype FOREIGN KEY (usertype) REFERENCES usertype(type)
);

CREATE TABLE IF NOT EXISTS group(
	groupid int AUTO_INCREMENT PRIMARY KEY,
	groupname text(20),
	groupdiscription text(50),
	groupcreateddate datetime,
);

CREATE TABLE IF NOT EXISTS user_group(
	uname text(20),
	groupid int,
	CONSTRAINT fk_user_group FOREIGN KEY (uname,groupid) REFERENCES user,group

);

//idea behind hierarchical data  http://mikehillyer.com/articles/managing-hierarchical-data-in-mysql/ we can get full path in single query
// resource is file or folder that we are creating
//  in here parent is the parent folder in that we are creating file or folder
CREATE TABLE IF NOT EXISTS resource(
	rid int AUTO_INCREMENT PRIMARY KEY,
	rname varchar(20),
	rtype text(20),
	parent int
 CONSTRAINT fk_user_resource FOREIGN KEY (parent) REFERENCES resource(rid)
);

//type is read or write
CREATE TABLE IF NOT EXISTS permission(
	ptype text(20) PRIMARY KEY
);
// which group have what permission to file or folder in case of folder we can derive it recursively
//http://mikehillyer.com/articles/managing-hierarchical-data-in-mysql/ we can get full path in single query
CREATE TABLE IF NOT EXISTS group_permission(
	groupid int,
	rid int,
	ptype text(20),
CONSTRAINT fk_group_permission FOREIGN KEY (groupid,rid,ptype) REFERENCES group,resource,permission
);

CREATE TABLE IF NOT EXISTS user_permission(
	username text(20),
	rid int,
	ptype text(20),
	CONSTRAINT fk_user_permission FOREIGN KEY (uname,rid,ptype) REFERENCES user,resource,permission

);

