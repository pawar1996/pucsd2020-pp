package repository

import (
	"context"

	"github.com/pucsd2020-pp/project/user_service/model"
)

type IRepository interface {
	GetByID(context.Context, int64) (interface{}, error)
	Create(context.Context, interface{}) (interface{}, error)
	Update(context.Context, interface{}) (interface{}, error)
	Delete(context.Context, int64) error
	GetAll(context.Context) ([]interface{}, error)
}
type IRepositoryUser interface {
	GetByID(context.Context, int64) (interface{}, error)
	Create(context.Context, interface{}) (interface{}, error)
	Update(context.Context, interface{}) (interface{}, error)
	Delete(context.Context, int64) error
	GetAll(context.Context) ([]interface{}, error)
	AuthorizeUser(context.Context, interface{}) (*model.UserAuthorizeResponse, error)
}

type Repository struct {
}

func (repo *Repository) GetByID(cntx context.Context, id int64) (obj interface{}, err error) {
	return
}

func (repo *Repository) Create(cntx context.Context, obj interface{}) (cobj interface{}, err error) {
	return
}

func (repo *Repository) Update(cntx context.Context, obj interface{}) (uobj interface{}, err error) {
	return
}

func (repo *Repository) Delete(cntx context.Context, id int64) (deleted bool, err error) {
	return
}

func (repo *Repository) GetAll(cntx context.Context) (obj []interface{}, err error) {
	return
}
