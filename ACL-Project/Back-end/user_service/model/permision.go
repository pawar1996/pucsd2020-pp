package model

type Permision struct {
	Rid         int64  `json:"rid" column:"rid"`
	Ptype       string `json:"ptype" column:"ptype"`
	Userid      int64  `json:"userid" column:"userid"`
	AdminUserid int64  `json:"adminuserid"`
}
