USE user_permision;
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE if exists user_detail;
CREATE TABLE IF NOT EXISTS user_detail (
    id                  INT         AUTO_INCREMENT      PRIMARY KEY,
    first_name          CHAR(25)    NOT NULL,
    last_name           CHAR(25)    NOT NULL,
    email               CHAR(64)    NOT NULL UNIQUE,
    usertype  CHAR(20) NOT NULL DEFAULT "user",
    password            VARBINARY(128)    NOT NULL,
    contact_number      CHAR(15)    NOT NULL,
    updated_by          INT         NOT NULL DEFAULT 0,
    deleted             TINYINT(1)  NOT NULL DEFAULT 0,
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP,
    last_update         DATETIME    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE = INNODB CHARACTER SET=utf8;
;

/*INSERT INTO user_detail(first_name,last_name,email,password,contact_number,usertype)VALUES("YASHA","SANJA","SANJA@YASHA.COM","PASSWORD","1234","admin");*/

drop table if exists resource;
CREATE TABLE IF NOT EXISTS resource(
	rid INT AUTO_INCREMENT PRIMARY KEY,
	rname VARCHAR(20),
	rtype CHAR(20),
	rpath VARCHAR(100)
)ENGINE = INNODB CHARACTER SET=utf8;
;
drop table if exists resource_permission;
CREATE TABLE IF NOT EXISTS resource_permission(
	rid INT,
	ptype VARCHAR(20),
	userid INT,
 CONSTRAINT fk_user_resource_permission FOREIGN KEY (userid) REFERENCES user_detail(id),
  CONSTRAINT fk_resource_permission FOREIGN KEY (rid) REFERENCES resource(rid)
)ENGINE = INNODB CHARACTER SET=utf8;
;
