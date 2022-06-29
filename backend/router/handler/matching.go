package handler

import (
	"net/http"

	"cloud.google.com/go/firestore"
)

func GetMatchingHandler(c *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//想定されるリクエスト情報
		//自己紹介時同様、ヘッダにuuid
		//ボディにフィルタリングのフラグがついてくるイメージ
		//hobby1:0,hobby1:1,hobby2:0,hobby3:0など

		//firebaseのmatch_userコレクション中の、マッチリストからデータを読み込んで返す
		//マッチリストが更新されるタイミングは、ユーザが自己紹介情報を追加する時のみ
		//ここでは、match_userコレクションを読み込んで返すのみ
		//※フロント側で読み込んでもらってもいいかも
	}
}
