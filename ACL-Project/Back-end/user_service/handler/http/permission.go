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
	"github.com/pucsd2020-pp/project/user_service/repository/permision"
)

type Permision struct {
	handler.HTTPHandler
	repo repository.IRepository
}

func NewPermisionHandler(conn *sql.DB) *Permision {
	return &Permision{
		repo: permision.NewPermisionRepository(conn),
	}
}

func (permision *Permision) GetHTTPHandler() []*handler.HTTPHandler {
	return []*handler.HTTPHandler{
		//&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "user/{id}/permision/{rid}", Func: permision.GetByID},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPost, Path: "permision", Func: permision.Create},
		//&handler.HTTPHandler{Authenticated: true, Method: http.MethodPut, Path: "user/{id}/resource/{rid}", Func: permision.Update},
		//&handler.HTTPHandler{Authenticated: true, Method: http.MethodDelete, Path: "user/{id}/resource/{rid}", Func: permision.Delete},
		//&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "resource/user/{id}", Func: permision.GetByID},
	}
}

func (permision *Permision) GetByID(w http.ResponseWriter, r *http.Request) {
	var usr interface{}
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		usr, err = permision.repo.GetByID(r.Context(), id)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (permision *Permision) Create(w http.ResponseWriter, r *http.Request) {
	var res model.Permision
	err := json.NewDecoder(r.Body).Decode(&res)
	for {
		if nil != err {
			break
		}

		_, err = permision.repo.Create(r.Context(), res)
		break
	}
	handler.WriteJSONResponse(w, r, res, http.StatusOK, err)
}

func (permision *Permision) Update(w http.ResponseWriter, r *http.Request) {
	var iUsr interface{}
	id, _ := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	usr := model.Permision{}
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}
		usr.Rid = id
		if nil != err {
			break
		}

		// set logged in permision id for tracking update
		//	usr.UpdatedBy = 0

		iUsr, err = permision.repo.Update(r.Context(), usr)
		if nil != err {
			break
		}
		usr = iUsr.(model.Permision)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (permision *Permision) Delete(w http.ResponseWriter, r *http.Request) {
	var payload string
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		err = permision.repo.Delete(r.Context(), id)
		if nil != err {
			break
		}
		payload = "Permision deleted successfully"
		break
	}

	handler.WriteJSONResponse(w, r, payload, http.StatusOK, err)
}

func (permision *Permision) GetAll(w http.ResponseWriter, r *http.Request) {
	//id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	usrs, err := permision.repo.GetAll(r.Context())
	handler.WriteJSONResponse(w, r, usrs, http.StatusOK, err)
}
