package auth

import (
	"errors"
	"net/http"
	"strings"

	"cloud.google.com/go/firestore"
	"github.com/slack-go/slack"
)

// ユーザの認証を行う．
// 送られてきたHTTPリクエストのAuthorizationヘッダに付与されているユーザIDが
// Firebaseのuserコレクションに登録されているかチェックし，登録されていれば，
// そこに格納されているSlackのトークンが有効であるか検証する．
// 認証に成功したら，Slackのクライアント（*slack.Client）を返す
func AuthorizeUser(c *firestore.Client, r *http.Request) (*slack.Client, error) {
	// Authorization: Bearer xxxx -> xxxx を取り出す
	authHeader := r.Header.Get("Authorization")
	userId := strings.Replace(authHeader, "Bearer ", "", 1)

	// user/xxxx["slack_id"] を取り出し、string型に変換
	dsnap, err := c.Collection("user").Doc(userId).Get(r.Context())
	if err != nil {
		return nil, err
	}
	token, err := dsnap.DataAt("slack_id")
	if err != nil {
		return nil, err
	}
	tokenStr, ok := token.(string)
	if !ok {
		return nil, errors.New("`slack_id` must be a string")
	}

	// slackのトークンが有効か検証
	api := slack.New(tokenStr)
	if _, err := api.AuthTestContext(r.Context()); err != nil {
		return nil, err
	}

	return api, nil
}
