package user

import (
	"context"
	"database/sql"
	"fmt"
	"os"

	"github.com/pucsd2020-pp/project/user_service/driver"
	"github.com/pucsd2020-pp/project/user_service/model"
)

type userRepository struct {
	conn *sql.DB
}

//NewUserRepository ...
func NewUserRepository(conn *sql.DB) *userRepository {
	return &userRepository{conn: conn}
}

func (user *userRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	obj := new(model.User)
	return driver.GetById(user.conn, obj, id)
}

func (user *userRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.User)
	result, err := driver.Create(user.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	rname := fmt.Sprintf("%s%d", "root", usr.Id)
	result, err = driver.Create(user.conn, &model.Resource{Rname: rname, Rtype: "folder", Rpath: fmt.Sprintf("%s%d%s", "root", usr.Id, "/")})
	if nil != err {
		return 0, err
	}
	Rid, _ := result.LastInsertId()
	result, err = driver.Create(user.conn, &model.ResourcePermission{Rid: Rid, Ptype: "r/w", UserId: usr.Id})

	_, err = os.Stat("/home/rzr/storage/" + rname)

	if os.IsNotExist(err) {
		errDir := os.MkdirAll("/home/rzr/storage/"+rname, 0755)
		if errDir != nil {
			return errDir, nil
		}

	}

	return id, nil
}
func (user *userRepository) AuthorizeUser(cntx context.Context, obj interface{}) (*model.UserAuthorizeResponse, error) {
	usr := obj.(model.UserAuthorize)
	return driver.AuthorizeUser(user.conn, usr)

}
func (user *userRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.User)
	err := driver.UpdateById(user.conn, &usr)
	return obj, err
}

func (user *userRepository) Delete(cntx context.Context, id int64) error {
	obj := &model.User{Id: id}
	return driver.SoftDeleteById(user.conn, obj, id)
}

func (user *userRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	obj := &model.User{}
	return driver.GetAll(user.conn, obj, 0, 0)
}
