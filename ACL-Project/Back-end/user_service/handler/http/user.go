package http

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"

	"github.com/pucsd2020-pp/project/user_service/handler"
	"github.com/pucsd2020-pp/project/user_service/model"
	"github.com/pucsd2020-pp/project/user_service/repository"
	"github.com/pucsd2020-pp/project/user_service/repository/user"
)

type User struct {
	handler.HTTPHandler
	repo repository.IRepositoryUser
}

func NewUserHandler(conn *sql.DB) *User {
	return &User{
		repo: user.NewUserRepository(conn),
	}
}

func (user *User) GetHTTPHandler() []*handler.HTTPHandler {
	return []*handler.HTTPHandler{
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "user/{id}", Func: user.GetByID},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPost, Path: "user", Func: user.Create},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPut, Path: "user/{id}", Func: user.Update},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodDelete, Path: "user/{id}", Func: user.Delete},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "user", Func: user.GetAll},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPost, Path: "user/authorize", Func: user.Authorize},
	}
}

func (user *User) GetByID(w http.ResponseWriter, r *http.Request) {
	var usr interface{}
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		usr, err = user.repo.GetByID(r.Context(), id)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (user *User) Authorize(w http.ResponseWriter, r *http.Request) {
	var usr model.UserAuthorize
	var result *model.UserAuthorizeResponse
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}

		result, err = user.repo.AuthorizeUser(r.Context(), usr)

		break
	}
	handler.WriteJSONResponse(w, r, result, http.StatusOK, err)
}

func (user *User) Create(w http.ResponseWriter, r *http.Request) {
	var usr model.User
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}

		_, err = user.repo.Create(r.Context(), usr)
		break
	}
	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (user *User) Update(w http.ResponseWriter, r *http.Request) {
	var iUsr interface{}
	id, _ := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	usr := model.User{}
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}
		usr.Id = id
		if nil != err {
			break
		}

		// set logged in user id for tracking update
		usr.UpdatedBy = 0

		iUsr, err = user.repo.Update(r.Context(), usr)
		if nil != err {
			break
		}
		usr = iUsr.(model.User)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (user *User) Delete(w http.ResponseWriter, r *http.Request) {
	var payload string
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		err = user.repo.Delete(r.Context(), id)
		if nil != err {
			break
		}
		payload = "User deleted successfully"
		break
	}

	handler.WriteJSONResponse(w, r, payload, http.StatusOK, err)
}

func (user *User) GetAll(w http.ResponseWriter, r *http.Request) {
	usrs, err := user.repo.GetAll(r.Context())
	handler.WriteJSONResponse(w, r, usrs, http.StatusOK, err)
}
