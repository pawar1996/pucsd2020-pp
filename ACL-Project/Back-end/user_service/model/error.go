package model

import (
	"errors"
)

var (
	InvalidRequest     = errors.New("Error:: Invalid Request")
	DBErrNotFound      = errors.New("Error:: record not exists")
	PermissionNotFound = errors.New("Error:: dont have enough permission to write")
	UserNotAuthorised  = errors.New("Error :: invalid username and password")
)
