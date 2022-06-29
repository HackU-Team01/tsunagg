package main

import (
	"tsunagg/backend/model/db"
	"tsunagg/backend/router"

	_ "github.com/joho/godotenv/autoload"
)

func main() {
	// Firestore読み込み
	c := db.NewFirestoreClient()
	defer c.Close()
	//実行確認

	// サーバ立ち上げ
	r := router.NewRouter(c)
	r.Serve()
}
