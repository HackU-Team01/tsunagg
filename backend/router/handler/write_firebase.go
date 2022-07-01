package handler

import (
	"encoding/json"
	"fmt"
	"net/http"

	"cloud.google.com/go/firestore"

	"tsunagg/backend/model/db"
	"tsunagg/backend/model/profile"
	"tsunagg/backend/router/response"
)

const defaultChannel = "#random"

func contains(s []string, e string) bool {
	for _, v := range s {
		if e == v {
			return true
		}
	}
	return false
}

func WriteFirebaseHandler(c *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// リクエストの情報を取得
		// リクエストボディに含まれる情報を取得
		p := new(db.AutoGenerated)
		decoder := json.NewDecoder(r.Body)
		decoder.DisallowUnknownFields()
		if err := decoder.Decode(p); err != nil {
			response.NG(w, response.InvalidArgsError)
			return
		}
		fmt.Printf("request: %+v\n", *p)

		// リクエスト カスタムヘッダに付与されているuuidを取得
		uuid := p.Headers.Authorization
		// 認証処理．users コレクションに uuid が登録されているかチェック
		if _, err := c.Collection("users").Doc(uuid).Get(r.Context()); err != nil {
			response.NG(w, response.NotAuthedError)
			return
		}
		fmt.Printf("uuid: %s\n", uuid)

		////////////////////////user_infoの更新//////////////////////////////
		if err := db.Write_firebase(c, p, uuid, 2); err != nil {
			response.NG(w, response.FirestoreError)
			return
		}

		////////////////////////Attribute_userの更新//////////////////////////////
		// ユーザのAttributeを見ていく
		// 全Attribute_infoを見ていく、
		// まだ該当AttributeドキュメントがAttribute_infoコレクション中になかったら作る
		no_doc_Attribute, user_attribute, err := db.Read_firebase_for_attribute_make(c, uuid)
		if err != nil {
			response.NG(w, response.FirestoreError)
			return
		}
		if err := db.Make_firebase_Attribute(c, no_doc_Attribute, uuid, 1); err != nil {
			response.NG(w, response.FirestoreError)
			return
		}

		// 各Attributeについて以下のように調べていく
		// ドキュメント名がユーザのAttributeに含まれるか
		// 含まれてたら
		// 該当者IDリストの中にユーザのIDが含まれるか調査し、なかったら追加
		// 含まれなかったら
		// 該当者IDリストの中にユーザのIDが含まれるか調査し、なかったら削除
		attribute_doc_name, err := db.Read_firebase_for_attribute(c, uuid, 1)
		if err != nil {
			response.NG(w, response.FirestoreError)
			return
		}

		//各Attributeドキュメントに対し、
		for _, v := range attribute_doc_name {
			var err error
			if contains(user_attribute, v) {
				//もし、ユーザのAttributeに含まれていたら、追加
				err = db.Write_firebase_Attribute(c, user_attribute, v, uuid, 1)
			} else {
				//ユーザのAttributeに含まれていなかったら、削除
				err = db.Write_firebase_Attribute(c, user_attribute, v, uuid, 2)
			}
			if err != nil {
				response.NG(w, response.FirestoreError)
				return
			}
		}

		////////////////////////match_userの更新//////////////////////////////
		if err := profile.Matching(c, uuid, user_attribute); err != nil {
			response.NG(w, response.FirestoreError)
			return
		}

		// Slack に自己紹介文を投稿
		// とりあえず投稿するチャンネルは #random にしています
		if err := profile.SendMessage(r.Context(), c, p, uuid, defaultChannel); err != nil {
			response.NG(w, response.SlackError)
			return
		}

		response.OK(w)
	}
}
