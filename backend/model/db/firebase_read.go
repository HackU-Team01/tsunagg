package db

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/iterator"
)

// type Read_Data struct {
// 	Name      string `firestore:"Name"`
// 	Attribute struct {
// 		Sports    []string `firestore:"Sports"`
// 		PlaceBorn []string `firestore:"Place_born"`
// 		PlaceLive []string `firestore:"Place_live"`
// 	} `firestore:"Attribute"`
// 	Sentence string `firestore:"Sentence"`
// }

type Read_Data struct {
	Name      string `firestore:"Name"`
	Attribute struct {
		Hobby     []string `firestore:"Hobby"`
		PlaceBorn []string `firestore:"Place_born"`
		PlaceLive []string `firestore:"Place_live"`
	} `firestore:"Attribute"`
	Sentence string `firestore:"Sentence"`
}

type Read_Data_Attribute struct {
	Applicable_users_id     []string `firestore:"Applicable_users_id"`
	channel_frag            int      `firestore:"channel_frag"`
	channel_name            string   `firestore:"channel_name"`
	len_Applicable_users_id int      `firestore:"len_Applicable_users_id"`
}

// Attributeスライスの中の重複を消す
func SliceUnique(target []string) (unique []string) {
	m := map[string]bool{}

	for _, v := range target {
		if !m[v] {
			m[v] = true
			unique = append(unique, v)
		}
	}

	return unique
}

// スライス同士の差集合を求める
func CulcDifference(l1, l2 []string) []string {
	s := make(map[string]struct{}, len(l1))

	for _, data := range l2 {
		s[data] = struct{}{}
	}

	r := make([]string, 0, len(l2))

	for _, data := range l1 {
		if _, ok := s[data]; ok {
			continue
		}

		r = append(r, data)
	}
	return r
}

//AttributeコレクションにまだないAttributeを返す
func Read_firebase_for_attribute_make(client *firestore.Client, uuid string) ([]string, []string, error) {
	// 初期化
	ctx := context.Background()
	// データ読み取り(Attribute_user)
	// ユーザのAttributeのドキュメントが、ttribute_userコレクションにあるか確認
	/* 全てのドキュメント名を配列に代入 */
	var doc_name []string
	iter := client.Collection("Attribute_user_sample").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			// log.Fatalf("Failed to iterate: %v", err)
			return nil, nil, err
		}
		fmt.Println(doc.Ref.ID)
		fmt.Println(doc.Data())
		doc_name = append(doc_name, doc.Ref.ID)
	}
	fmt.Println(doc_name)

	/* ユーザの全てのAttributeを取得 */
	// var user_attribute []string
	dsnap, err := client.Collection("user_info_sample").Doc(uuid).Get(ctx)
	if err != nil {
		//log.Fatalf("Failed to dsnap: %v", err)
		return nil, nil, err
	}
	m := dsnap.Data()
	// fmt.Printf("Document data: %#v\n", m)
	for key, value := range m {
		fmt.Printf("key: %v, value: %v\n", key, value)
	}

	ent := Read_Data{}
	if err = dsnap.DataTo(&ent); err != nil {
		// glog.Errorln(err)
	}
	// Attribute_slice := append(ent.Attribute.PlaceBorn, ent.Attribute.PlaceLive...)
	// Attribute_slice = append(Attribute_slice, ent.Attribute.Sports...)
	Attribute_slice := append(ent.Attribute.Hobby, ent.Attribute.PlaceLive...)
	Attribute_slice = append(Attribute_slice, ent.Attribute.PlaceBorn...)
	// fmt.Println(Attribute_slice)
	Attribute_slice_unique := SliceUnique(Attribute_slice)
	// fmt.Println(Attribute_slice_unique)

	//まだAttribute_userコレクションにドキュメントとして追加されていないAttributeを調べる
	no_doc_Attribute := CulcDifference(Attribute_slice_unique, doc_name)
	// fmt.Println(no_doc_Attribute)

	return no_doc_Attribute, Attribute_slice, nil

}

//pattern=1 Attributeコレクションの全ドキュメント名を返す

func Read_firebase_for_attribute(client *firestore.Client, uuid string, pattern int) ([]string, error) {
	if pattern == 1 {
		/* 全てのドキュメント名を配列に代入 */
		var doc_name []string
		// 初期化
		ctx := context.Background()
		iter := client.Collection("Attribute_user_sample").Documents(ctx)
		for {
			doc, err := iter.Next()
			if err == iterator.Done {
				break
			}
			if err != nil {
				//log.Fatalf("Failed to iterate: %v", err)
				return nil, err
			}
			// fmt.Println(doc.Ref.ID)
			// fmt.Println(doc.Data())
			doc_name = append(doc_name, doc.Ref.ID)
		}
		fmt.Println(doc_name)

		return doc_name, nil
	} else {

		return nil, nil
	}
	// var err []string
	// return err
}

//Attribute_user中のApplicable_users_idのリストを取得する
func Read_firebase_for_match(client *firestore.Client, user_attribute_i string) (interface{}, error) {
	// var Applicable_users_id interface{}
	ctx := context.Background()
	dsnap, err := client.Collection("Attribute_user_sample").Doc(user_attribute_i).Get(ctx)
	if err != nil {
		//log.Fatalf("Failed to dsnap: %v", err)
		return nil, err

	}

	ent := Read_Data_Attribute{}
	if err = dsnap.DataTo(&ent); err != nil {
		// glog.Errorln(err)
	}
	Applicable_users_id := ent.Applicable_users_id
	// fmt.Println("user_attribute_i")
	// fmt.Println(user_attribute_i)
	// fmt.Println("Applicable_users_id")
	// fmt.Println(Applicable_users_id)
	// fmt.Printf("Applicable_users_id: %T\n", Applicable_users_id)

	return Applicable_users_id, nil
}

func Read_firebase_for_match_attribute(client *firestore.Client, uuid string) ([]string, error) {
	// var user_attribute []string
	ctx := context.Background()
	dsnap, err := client.Collection("user_info_sample").Doc(uuid).Get(ctx)
	if err != nil {
		//log.Fatalf("Failed to dsnap: %v", err)
		return nil, err
	}
	//m := dsnap.Data()
	// fmt.Printf("Document data: %#v\n", m)
	// for key, value := range m {
	// 	fmt.Printf("key: %v, value: %v\n", key, value)
	// }

	ent := Read_Data{}
	if err = dsnap.DataTo(&ent); err != nil {
		// glog.Errorln(err)
	}
	// Attribute_slice := append(ent.Attribute.PlaceBorn, ent.Attribute.PlaceLive...)
	// Attribute_slice = append(Attribute_slice, ent.Attribute.Sports...)
	Attribute_slice := append(ent.Attribute.Hobby, ent.Attribute.PlaceLive...)
	Attribute_slice = append(Attribute_slice, ent.Attribute.PlaceBorn...)
	// fmt.Println(Attribute_slice)
	Attribute_slice_unique := SliceUnique(Attribute_slice)

	return Attribute_slice_unique, nil

}
