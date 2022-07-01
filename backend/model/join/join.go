package join

import (
	"context"
	"errors"
	"fmt"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/iterator"

	"tsunagg/backend/model/chat"
)

type JoinRequest struct {
	Data struct {
		Channel       string `json:"Channel"`
		Authorization string `json:"Authorization"`
	} `json:"data"`
}

func JoinChannel(ctx context.Context, c *firestore.Client, j *JoinRequest, uuid string) error {
	api, err := chat.NewSlackUserClient(ctx, c, uuid)
	if err != nil {
		return err
	}

	channelId, err := channelNameToId(ctx, c, j.Data.Channel)
	if err != nil {
		return err
	}

	if _, _, _, err := api.JoinConversationContext(ctx, channelId); err != nil {
		return err
	}
	return nil
}

// チャンネル名からチャンネルIDに変換
// 今のところ全ドキュメントをイテレーションしていて効率が悪いので要改善かもしれない
func channelNameToId(ctx context.Context, c *firestore.Client, channelName string) (string, error) {
	collection := c.Collection("Attribute_user_sample")
	it := collection.Documents(ctx)
	for {
		dsnap, err := it.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return "", err
		}
		if data := dsnap.Data(); data["channel_name"] == channelName {
			if channelId, ok := data["channel_id"]; !ok {
				return "", errors.New("`channel_id` not found")
			} else {
				return channelId.(string), nil
			}
		}
	}
	errMsg := fmt.Sprintf("channel `%s` not found", channelName)
	return "", errors.New(errMsg)
}
