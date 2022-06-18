package router

import (
	"net/http"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/rs/cors"

	"tsunagg/backend/router/handler"
)

const defaultAddr = ":8000"

type Router struct {
	http.ServeMux
}

func NewRouter(c *firestore.Client) *Router {
	mux := new(Router)
	mux.HandleFunc("/api/editProfile", handler.EditProfileHandler(c))
	mux.HandleFunc("/api/getMatching", handler.GetMatchingHandler(c))
	return mux
}

func (r *Router) Serve() {
	// クライアント側のポートからサーバ側のポートにアクセスできるようにCORSを設定する
	handler := cors.Default().Handler(r)

	addr, ok := os.LookupEnv("ADDRESS")
	if !ok {
		addr = defaultAddr
	}

	err := http.ListenAndServe(addr, handler)
	if err != nil {
		panic(err)
	}
}
