package main

import (
	_ "github.com/joho/godotenv/autoload"

	"tsunagg/backend/model/db"
	"tsunagg/backend/router"
)

func main() {
	// Firestore読み込み
	c := db.NewFirestoreClient()
	defer c.Close()

	// サーバ立ち上げ
	r := router.NewRouter(c)
	r.Serve()
}
