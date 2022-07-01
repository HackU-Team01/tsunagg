package profile

import (
	"context"

	"cloud.google.com/go/firestore"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type MessageInfo struct {
	ChannelId string `firestore:"channel_id"`
	Timestamp string `firestore:"ts"`
}

// Slack に投稿されたメッセージの情報を Firestore に登録
func registerMessageInfo(ctx context.Context, c *firestore.Client, uuid string, channelId string, ts string) error {
	info := MessageInfo{ChannelId: channelId, Timestamp: ts}
	_, err := c.Collection("message_info").Doc(uuid).Set(ctx, info)

	if err != nil {
		return err
	}
	return nil
}

// Firestore に登録されたメッセージ情報を取得．
// 2つめの返り値は「メッセージ情報が既に登録済みか」を表すフラグ
func getMessageInfo(ctx context.Context, c *firestore.Client, uuid string) (MessageInfo, bool, error) {
	dsnap, err := c.Collection("message_info").Doc(uuid).Get(ctx)
	if err != nil {
		if status.Code(err) == codes.NotFound {
			// 未登録の場合
			return MessageInfo{}, false, nil
		} else {
			// 未登録以外のエラーの場合
			return MessageInfo{}, false, err
		}
	}

	var info MessageInfo
	if err := dsnap.DataTo(&info); err != nil {
		return MessageInfo{}, false, err
	}
	return info, true, nil
}
