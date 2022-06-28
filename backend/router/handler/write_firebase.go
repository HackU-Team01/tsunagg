package handler

import (
	"fmt"
	"net/http"
	//"strings"
	"encoding/json"

	"cloud.google.com/go/firestore"

	"tsunagg/backend/model/db"
	"tsunagg/backend/model/profile"
	"tsunagg/backend/router/response"
)

func contains(s []string, e string) bool {
	for _, v := range s {
		if e == v {
			return true
		}
	}
	return false
}

type header struct {
	Header struct {
		Authorization string `json:"Authorization"`
	} `json:"headers"`
}

func WriteFirebaseHandler(c *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// リクエストの情報を取得
		// リクエストボディに含まれる情報を取得
		fmt.Println(r.Body)
		len := r.ContentLength
		body := make([]byte, len)
		r.Body.Read(body)
		//サンプルで仮のJSONを取得
		// file, err := ioutil.ReadFile("./sample.json")
		// if err != nil {
		// 	log.Println("ReadError: ", err)
		// 	os.Exit(1)
		// }
		// fmt.Println(string(file))

		// リクエスト カスタムヘッダに付与されているuuidを取得
		var hd header
		json.Unmarshal(body, &hd)
		fmt.Println(hd.Header.Authorization)
		uuid := (hd.Header.Authorization)
		fmt.Println("Authorizationヘッダに付与されたuuid")
		fmt.Println(uuid)
		// リクエストヘッダに付与されているuuidを取得
		//authHeader := r.Header.Get("Authorization")
		//uuid := strings.Replace(authHeader, "Bearer ", "", 1)
		//fmt.Println("Authorizationヘッダに付与されたuuid")
		//fmt.Println(uuid)
		////////////////////////user_infoの更新//////////////////////////////

		if err := db.Write_firebase(c, body, uuid, 2); err != nil {
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

		response.OK(w)
	}
}
