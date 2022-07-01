package handler

import (
	"encoding/json"
	"net/http"

	"cloud.google.com/go/firestore"

	"tsunagg/backend/model/join"
	"tsunagg/backend/router/response"
)

const failedToJoinError response.ResponseErrorType = "failed_to_join"

func JoinChannelHandler(c *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// リクエストの情報を取得
		// リクエストボディに含まれる情報を取得
		j := new(join.JoinRequest)
		decoder := json.NewDecoder(r.Body)
		decoder.DisallowUnknownFields()
		if err := decoder.Decode(j); err != nil {
			response.NG(w, response.InvalidArgsError)
			return
		}

		// リクエスト カスタムヘッダに付与されているuuidを取得
		uuid := j.Data.Authorization
		// 認証処理．users コレクションに uuid が登録されているかチェック
		if _, err := c.Collection("user_sample").Doc(uuid).Get(r.Context()); err != nil {
			response.NG(w, response.NotAuthedError)
			return
		}

		// チャンネルに参加
		if err := join.JoinChannel(r.Context(), c, j, uuid); err != nil {
			response.NG(w, failedToJoinError)
			return
		}

		response.OK(w)
	}
}
