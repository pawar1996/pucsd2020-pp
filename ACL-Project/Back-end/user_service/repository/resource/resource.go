package resource

import (
	"context"
	"database/sql"
	"log"
	"os"

	"github.com/pucsd2020-pp/project/user_service/driver"
	"github.com/pucsd2020-pp/project/user_service/model"
)

type resourceRepository struct {
	conn *sql.DB
}

//NewresourceRepository ...
func NewResourceRepository(conn *sql.DB) *resourceRepository {
	return &resourceRepository{conn: conn}
}

func (resource *resourceRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	//obj := new(model.Resource)
	return driver.GetUserResource(resource.conn, id)
}

func (resource *resourceRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.ResourceRequest)
	result, err := driver.UserPermission(resource.conn, usr.RuserID, usr.Rpath)
	//result, err := driver.Create(resource.conn, &usr)
	log.Println(result, err)
	if nil != err {
		return 0, err
	}
	if result {
		rtype := usr.Rpath + usr.Rname
		if usr.Rtype == "folder" {
			rtype = usr.Rpath + usr.Rname + "/"
		}
		resul, err := driver.Create(resource.conn, &model.Resource{Rname: usr.Rname, Rtype: usr.Rtype, Rpath: rtype})
		if nil != err {
			return 0, err
		}
		id, _ := resul.LastInsertId()
		result, err := driver.Create(resource.conn, &model.ResourcePermission{id, "r/w", usr.RuserID})
		if nil != err {
			return 0, err
		}
		id, _ = result.LastInsertId()
		if usr.Rtype == "folder" {
			_, err = os.Stat("/home/yashashri/storage/" + rtype)

			if os.IsNotExist(err) {
				errDir := os.MkdirAll("/home/yashashri/storage/"+rtype, 0755)
				if errDir != nil {
					return errDir, nil
				}

			}
		} else {
			_, err := os.Create("/home/yashashri/storage/" + rtype)
			if err != nil {
				return err, nil
			}
		}
		return id, nil
	}
	//id, _ := result.LastInsertId()
	//usr.Rid = id
	return 0, model.PermissionNotFound
}

func (resource *resourceRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.Resource)
	err := driver.UpdateById(resource.conn, &usr)
	return obj, err
}

func (resource *resourceRepository) Delete(cntx context.Context, id int64) error {
	obj := &model.Resource{Rid: id}
	return driver.SoftDeleteById(resource.conn, obj, id)
}

func (resource *resourceRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	obj := &model.Resource{}
	return driver.GetAll(resource.conn, obj, 0, 0)
}
