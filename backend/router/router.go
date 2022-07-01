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
	mux.HandleFunc("/api/joinChannel", handler.JoinChannelHandler(c))
	mux.HandleFunc("/api/writeFirebase", handler.WriteFirebaseHandler(c))
	return mux
}

func (r *Router) Serve() {
	// クライアント側のポートからサーバ側のポートにアクセスできるようにCORSを設定する
	handler := cors.Default().Handler(r)

	addr := os.Getenv("ADDRESS")
	if addr == "" {
		addr = defaultAddr
	}

	err := http.ListenAndServe(addr, handler)
	if err != nil {
		panic(err)
	}
}
