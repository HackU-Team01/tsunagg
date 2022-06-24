package handler

import (
	"fmt"
	"net/http"
	"strings"
	"tsunagg/backend/model/db"
	"tsunagg/backend/model/matching"

	"cloud.google.com/go/firestore"
)

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

		// リクエストヘッダに付与されているuuidを取得
		authHeader := r.Header.Get("Authorization")
		uuid := strings.Replace(authHeader, "Bearer ", "", 1)
		fmt.Println("Authorizationヘッダに付与されたuuid")
		fmt.Println(uuid)
		////////////////////////user_infoの更新//////////////////////////////

		db.Write_firebase(c, body, uuid, 2)

		////////////////////////Attribute_userの更新//////////////////////////////
		// ユーザのAttributeを見ていく
		// 全Attribute_infoを見ていく、
		// まだ該当AttributeドキュメントがAttribute_infoコレクション中になかったら作る
		var no_doc_Attribute []string
		var user_attribute []string
		no_doc_Attribute, user_attribute = db.Read_firebase_for_attribute_make(c, uuid)
		//fmt.Println(no_doc_Attribute)
		db.Make_firebase_Attribute(c, no_doc_Attribute, uuid, 1)

		// 各Attributeについて以下のように調べていく
		// ドキュメント名がユーザのAttributeに含まれるか
		// 含まれてたら
		// 該当者IDリストの中にユーザのIDが含まれるか調査し、なかったら追加
		// 含まれなかったら
		// 該当者IDリストの中にユーザのIDが含まれるか調査し、なかったら削除
		var attribute_doc_name []string
		attribute_doc_name = db.Read_firebase_for_attribute(c, uuid, 1)
		// fmt.Println("Attribute_docname")
		// fmt.Println(attribute_doc_name)
		// fmt.Println("user_attribute")
		// fmt.Println(user_attribute)

		//各Attributeドキュメントに対し、
		for _, v := range attribute_doc_name {
			if contains(user_attribute, v) {
				//もし、ユーザのAttributeに含まれていたら、追加
				db.Write_firebase_Attribute(c, user_attribute, v, uuid, 1)
			} else {
				//ユーザのAttributeに含まれていなかったら、削除
				db.Write_firebase_Attribute(c, user_attribute, v, uuid, 2)
			}
		}

		////////////////////////match_userの更新//////////////////////////////
		matching.Matching(c, uuid, user_attribute)

	}
}
