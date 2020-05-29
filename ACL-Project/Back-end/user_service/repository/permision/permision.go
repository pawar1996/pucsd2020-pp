package permision

import (
	"context"
	"database/sql"

	"github.com/pucsd2020-pp/project/user_service/driver"
	"github.com/pucsd2020-pp/project/user_service/model"
)

type permisionRepository struct {
	conn *sql.DB
}

//NewUserRepository ...
func NewPermisionRepository(conn *sql.DB) *permisionRepository {
	return &permisionRepository{conn: conn}
}

func (permision *permisionRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	obj := new(model.User)
	return driver.GetById(permision.conn, obj, id)
}

func (permision *permisionRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.Permision)
	result, err := driver.CheckPermission(permision.conn, usr.AdminUserid)
	if err != nil {
		return 0, err
	}
	if result {
		result, err := driver.Create(permision.conn, &model.ResourcePermission{usr.Rid, usr.Ptype, usr.Userid})
		if nil != err {
			return 0, err
		}

		id, _ := result.LastInsertId()
		return id, nil
	}
	return 0, model.PermissionNotFound
}
func (permision *permisionRepository) AuthorizeUser(cntx context.Context, obj interface{}) (*model.UserAuthorizeResponse, error) {
	usr := obj.(model.UserAuthorize)
	return driver.AuthorizeUser(permision.conn, usr)

}
func (permision *permisionRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.User)
	err := driver.UpdateById(permision.conn, &usr)
	return obj, err
}

func (permision *permisionRepository) Delete(cntx context.Context, id int64) error {
	obj := &model.User{Id: id}
	return driver.SoftDeleteById(permision.conn, obj, id)
}

func (permision *permisionRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	obj := &model.User{}
	return driver.GetAll(permision.conn, obj, 0, 0)
}
