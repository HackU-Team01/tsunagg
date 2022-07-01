package db

import (
	"context"
	"fmt"
	"os"
	"strings"
	"unicode"

	"cloud.google.com/go/firestore"

	"tsunagg/backend/model/chat"
)

type AutoGenerated struct {
	Data struct {
		Name      string `json:"Name"`
		Attribute struct {
			Hobby     []string `json:"Hobby"`
			PlaceBorn []string `json:"Place_born"`
			PlaceLive []string `json:"Place_live"`
		} `json:"Attribute"`
		Sentence string `json:"Sentence"`
	} `json:"data"`
	Headers struct {
		Authorization string `json:"Authorization"`
	} `json:"headers"`
}

// Attributeインターフェースの中にあるか
func interfaceContain(target string, list interface{}) bool {
	revert := list.([]interface{})
	for _, r := range revert {
		if target == r {
			return true

		}
	}

	return false
}

func remove(strings interface{}, search string) []interface{} {
	//result := []string{}
	revert := strings.([]interface{})
	var result []interface{}
	for _, v := range revert {
		if v != search {
			result = append(result, v)
		}
	}
	return result
}

func Write_firebase(client *firestore.Client, ev *AutoGenerated, uuid string, pattern int) error {
	if pattern == 1 {
		// データ追加(users)
		_, _, err := client.Collection("user_sample").Add(context.Background(), map[string]interface{}{
			"Image":      "image/image4.png",
			"Name":       "Michael",
			"OAuthToken": "000-000-000",
			"Slack_id":   "000-000-000",
		})
		if err != nil {
			return err
		}
	} else if pattern == 2 {
		// データ更新（user_info）
		// _, _ = client.Collection("user_info_sample").Doc(uuid).Set(context.Background(), map[string]map[string][]string{
		// 	"Attribute": {"Sports": ev.Data.Attribute.Sports, "Place_Live": ev.Data.Attribute.PlaceLive, "Place_born": ev.Data.Attribute.PlaceBorn},
		// }, firestore.MergeAll)
		_, err := client.Collection("user_info_sample").Doc(uuid).Set(context.Background(), map[string]map[string][]string{
			"Attribute": {"Hobby": ev.Data.Attribute.Hobby, "Place_Live": ev.Data.Attribute.PlaceLive, "Place_born": ev.Data.Attribute.PlaceBorn},
		}, firestore.MergeAll)
		if err != nil {
			return err
		}
		_, err = client.Collection("user_info_sample").Doc(uuid).Set(context.Background(), map[string]interface{}{
			"Sentence": ev.Data.Sentence,
		}, firestore.MergeAll)
		if err != nil {
			return err
		}
	}
	return nil
}

func Make_firebase_Attribute(client *firestore.Client, A_slice []string, uuid string, pattern int) error {
	if pattern == 1 {
		// Attributeコレクションにまだ追加されてないAttributeのドキュメントを生成
		for _, v := range A_slice {
			_, err := client.Collection("Attribute_user_sample").Doc(v).Set(context.Background(), map[string][]string{
				"Applicable_users_id": {uuid},
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
			_, err = client.Collection("Attribute_user_sample").Doc(v).Set(context.Background(), map[string]string{
				"channel_name": (convertChannelName(v) + "_channel"),
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
			_, err = client.Collection("Attribute_user_sample").Doc(v).Set(context.Background(), map[string]int{
				"len_Applicable_users_id": 1,
				"channel_frag":            0,
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

func Write_firebase_Attribute(client *firestore.Client, user_attribute []string, attribute_doc_name string, uuid string, pattern int) error {
	if pattern == 1 {
		//ユーザが持つAttribute
		// applicable_users_infoにuser_idを追加する

		// Firestoreからデータを取得
		ctx := context.Background()
		snapshot, firestoreErr := client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Get(ctx)

		// エラーチェック
		if firestoreErr != nil {
			return firestoreErr
		}

		// 取得した配列に、新しい要素を追加！
		var res, _ = snapshot.Data()["Applicable_users_id"].([]interface{})
		// fmt.Println(res)
		if !interfaceContain(uuid, res) {
			users_id := append(res, uuid)
			_, err := client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Set(context.Background(), map[string][]interface{}{
				"Applicable_users_id": users_id,
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
			_, err = client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Set(context.Background(), map[string]int{
				"len_Applicable_users_id": len(users_id),
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
		}

		snapshot, firestoreErr = client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Get(ctx)
		// エラーチェック
		if firestoreErr != nil {
			return firestoreErr
		}

		//len(user_id)が○人超えたらチャンネルのドキュメントを生成
		res, _ = snapshot.Data()["Applicable_users_id"].([]interface{})
		if len(res) >= 2 {
			channelName, err := snapshot.DataAt("channel_name")
			if err != nil {
				return err
			}

			// チャンネルがなければ作る
			data := snapshot.Data()
			if _, ok := data["channel_id"]; !ok {
				channelId, err := chat.CreateChannel(channelName.(string))
				if err != nil {
					fmt.Fprintln(os.Stderr, "failed to create channel: "+channelName.(string))
					return err
				}
				_, err = client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Set(context.Background(), map[string]string{
					"channel_id": channelId,
				}, firestore.MergeAll)
				if err != nil {
					return err
				}
			}

			_, err = client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Set(context.Background(), map[string]int{
				"channel_frag": 1,
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
		}

	} else if pattern == 2 {
		//ユーザが持たないAttribute
		// applicable_users_infoからuser_idを削除する

		// Firestoreからデータを取得
		ctx := context.Background()
		snapshot, firestoreErr := client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Get(ctx)

		// エラーチェック
		if firestoreErr != nil {
			return firestoreErr
		}
		// 取得した配列にuuidが含まれていたら削除する

		var res, _ = snapshot.Data()["Applicable_users_id"].([]interface{})
		//fmt.Println(res)
		if interfaceContain(uuid, res) {
			users_id := remove(res, uuid)
			_, err := client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Set(context.Background(), map[string][]interface{}{
				"Applicable_users_id": users_id,
			}, firestore.MergeAll)
			if err != nil {
				return err
			}
			_, err = client.Collection("Attribute_user_sample").Doc(attribute_doc_name).Set(context.Background(), map[string]int{
				"len_Applicable_users_id": len(users_id),
			}, firestore.MergeAll)
			if err != nil {
				return err
			}

		}
		//ユーザが持たないAttributeかつ、Applicable_users_idにも含まれないものは、
		//何もしない
	}
	return nil
}

//match_user_sampleコレクションにて、
// uuidをドキュメント名として、マッチしてるユーザを追加していく
func Write_firebase_Match(client *firestore.Client, uuid string, match_userid string, match_userid_match_Attribute []string) error {
	_, err := client.Collection("match_user_sample").Doc(uuid).Set(context.Background(), map[string]map[string][]string{
		"match_user_info": {match_userid: match_userid_match_Attribute},
	}, firestore.MergeAll)
	if err != nil {
		return err
	}
	_, err = client.Collection("match_user_sample").Doc(match_userid).Set(context.Background(), map[string]map[string][]string{
		"match_user_info": {uuid: match_userid_match_Attribute},
	}, firestore.MergeAll)
	if err != nil {
		return err
	}
	return nil
}

// チャンネル名に使えない文字はハイフンに変換する
func convertChannelName(channel string) string {
	return strings.Map(func(r rune) rune {
		if l := unicode.ToLower(r); isValidChar(l) {
			return l
		} else {
			return '-'
		}
	}, channel)
}

// チャンネル名に使用可能な文字か判定
func isValidChar(r rune) bool {
	if r == '-' || r == '_' {
		return true
	}
	return !unicode.IsPunct(r) && !unicode.IsSpace(r) && !unicode.IsSymbol(r) && !unicode.IsUpper(r)
}
