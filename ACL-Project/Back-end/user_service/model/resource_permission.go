package model

type ResourcePermission struct {
	Rid    int64  `json:"rid,omitempty" column:"rid"`
	Ptype  string `json:"ptype" column:"ptype"`
	UserId int64  `json:"userid" column:"userid"`
}

func (resourcePermission *ResourcePermission) Table() string {
	return "resource_permission"
}

func (resourcePermission *ResourcePermission) String() string {
	return Stringify(resourcePermission)
}
