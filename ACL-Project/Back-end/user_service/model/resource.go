package model

type Resource struct {
	Rid   int64  `json:"rid,omitempty" key:"primary" autoincr:"1" column:"rid"`
	Rname string `json:"rname" column:"rname"`
	Rtype string `json:"rtype" column:"rtype"`
	Rpath string `json:"rpath" column:"rpath"`
}

type ResourceRequest struct {
	Rid     int64  `json:"rid,omitempty" key:"primary" autoincr:"1" column:"rid"`
	Rname   string `json:"rname" column:"rname"`
	Rtype   string `json:"rtype" column:"rtype"`
	Rpath   string `json:"rpath" column:"rpath"`
	RuserID int64  `json:"ruserid" column:"ruserid"`
}

type ResourceResponse struct {
	Rid         int64  `json:"rid,omitempty" key:"primary" autoincr:"1" column:"rid"`
	Rname       string `json:"rname" column:"rname"`
	Rtype       string `json:"rtype" column:"rtype"`
	Rpath       string `json:"rpath" column:"rpath"`
	Rpermission string `json:"rpermission" column:"rpermission"`
}

func (resource *Resource) Table() string {
	return "resource"
}

func (resource *Resource) String() string {
	return Stringify(resource)
}
