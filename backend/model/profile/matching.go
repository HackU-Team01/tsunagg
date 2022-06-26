package profile

import (
	"fmt"
	"tsunagg/backend/model/db"

	"cloud.google.com/go/firestore"
)

// n がスライスに含まれているか
func member(n string, xs []string) bool {
	for _, x := range xs {
		if n == x {
			return true
		}
	}
	return false
}

//積集合の導出
func MakeIntersection(set1, set2 []string) []string {
	set := []string{}
	//set1の各要素がset2に含まれていた場合setに格納
	for _, c := range set1 {
		if member(c, set2) {
			set = append(set, c)
		}
	}
	return set
}

//match_user_infoの作成
//自己紹介情報が入力される時に呼び出される
func Matching(client *firestore.Client, uuid string, user_attribute []string) {
	//match_user_info中の自分のuuidのドキュメントに
	//　match_user_info:{uuid1:[hobby,hobby],uuid2:[]}を作成
	//流れ
	//①user_attributeを順に見ていく
	//②Attribute_userコレクションのuser_attribute[i]ドキュメントを参照
	//③user_attribute[i]ドキュメント中の、Applicable_users_idを参照
	//④match_userコレクションの
	// match_user_infoフィールドのApplicable_users_id[j]の配列に、
	// user_attribute[]と、user_info_sampleコレクション中のApplicable_users_id[j]ドキュメントのAttribute[]の積集合を追加
	// 	"match_user_info": {Applicable_users_id[j]: [共通するAttribute],Applicable_users_id[j+1]: [共通するAttribute]...}
	for _, v := range user_attribute {
		user_attribute_i := v
		Applicable_users_id, errors := db.Read_firebase_for_match(client, user_attribute_i)
		fmt.Printf("error:%v\n", errors)
		//①②③
		// fmt.Printf("user_attribute_i: %v\n", user_attribute_i)
		// fmt.Printf("Applicable_users_id: %v\n", Applicable_users_id)
		userid_Slice, _ := Applicable_users_id.([]string)
		for _, match_userid := range userid_Slice {
			// fmt.Println(match_userid)
			//④match_useridの全Attributeを取得し、user_attributeとの積集合を取る
			if uuid != match_userid {
				fmt.Printf("user_attribute:%v\n", user_attribute)
				match_userid_All_Attribute, errors := db.Read_firebase_for_match_attribute(client, match_userid)
				fmt.Printf("error:%v\n", errors)
				fmt.Printf("match_users_all_attribute:%v\n", match_userid_All_Attribute)
				match_userid_match_Attribute := MakeIntersection(user_attribute, match_userid_All_Attribute)
				match_userid_match_Attribute_unique := db.SliceUnique(match_userid_match_Attribute)
				fmt.Printf("match_userid_match_Attribute_unique:%v\n", match_userid_match_Attribute_unique)
				//④積集合を、match_userコレクションのuuidドキュメントに
				//match_user_info{match_user_id:[match_userid_match_Attribute]}のような形で追加
				db.Write_firebase_Match(client, uuid, match_userid, match_userid_match_Attribute_unique)
				//
			}
		}
	}

	//〃中のmatch_user_infoの各uuidの人のドキュメントの
	//	match_user_info:{uuid1:[hobby,hobby],uuid2:[]}に自分を追加

}
