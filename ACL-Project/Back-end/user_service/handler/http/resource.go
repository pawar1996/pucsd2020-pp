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
	"github.com/pucsd2020-pp/project/user_service/repository/resource"
)

type Resource struct {
	handler.HTTPHandler
	repo repository.IRepository
}

func NewResourceHandler(conn *sql.DB) *Resource {
	return &Resource{
		repo: resource.NewResourceRepository(conn),
	}
}

func (resource *Resource) GetHTTPHandler() []*handler.HTTPHandler {
	return []*handler.HTTPHandler{
		//&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "user/{id}/resource/{rid}", Func: resource.GetByID},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPost, Path: "resource", Func: resource.Create},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPut, Path: "user/{id}/resource/{rid}", Func: resource.Update},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodDelete, Path: "user/{id}/resource/{rid}", Func: resource.Delete},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "resource/user/{id}", Func: resource.GetByID},
	}
}

func (resource *Resource) GetByID(w http.ResponseWriter, r *http.Request) {
	var usr interface{}
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		usr, err = resource.repo.GetByID(r.Context(), id)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (resource *Resource) Create(w http.ResponseWriter, r *http.Request) {
	var res model.ResourceRequest
	err := json.NewDecoder(r.Body).Decode(&res)
	for {
		if nil != err {
			break
		}

		_, err = resource.repo.Create(r.Context(), res)
		break
	}
	handler.WriteJSONResponse(w, r, res, http.StatusOK, err)
}

func (resource *Resource) Update(w http.ResponseWriter, r *http.Request) {
	var iUsr interface{}
	id, _ := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	usr := model.Resource{}
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}
		usr.Rid = id
		if nil != err {
			break
		}

		// set logged in resource id for tracking update
		//	usr.UpdatedBy = 0

		iUsr, err = resource.repo.Update(r.Context(), usr)
		if nil != err {
			break
		}
		usr = iUsr.(model.Resource)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (resource *Resource) Delete(w http.ResponseWriter, r *http.Request) {
	var payload string
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		err = resource.repo.Delete(r.Context(), id)
		if nil != err {
			break
		}
		payload = "Resource deleted successfully"
		break
	}

	handler.WriteJSONResponse(w, r, payload, http.StatusOK, err)
}

func (resource *Resource) GetAll(w http.ResponseWriter, r *http.Request) {
	//id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	usrs, err := resource.repo.GetAll(r.Context())
	handler.WriteJSONResponse(w, r, usrs, http.StatusOK, err)
}
