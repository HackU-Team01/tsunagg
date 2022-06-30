package join

import (
	"context"

	"cloud.google.com/go/firestore"

	"tsunagg/backend/model/chat"
)

type JoinRequest struct {
	Data struct {
		ChannelId string `json:"channel_id"`
	} `json:"data"`
	Headers struct {
		Authorization string `json:"Authorization"`
	} `json:"headers"`
}

func JoinChannel(ctx context.Context, c *firestore.Client, j *JoinRequest, uuid string) error {
	api, err := chat.NewSlackUserClient(ctx, c, uuid)
	if err != nil {
		return err
	}

	if _, _, _, err := api.JoinConversationContext(ctx, j.Data.ChannelId); err != nil {
		return err
	}
	return nil
}
