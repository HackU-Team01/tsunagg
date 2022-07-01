package chat

import (
	"context"
	"errors"
	"fmt"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/slack-go/slack"
)

const botTokenVar = "SLACK_BOT_TOKEN"

func NewSlackBotClient(options ...slack.Option) (*slack.Client, error) {
	token := os.Getenv(botTokenVar)
	if token == "" {
		errMsg := fmt.Sprintf("environmental variable `%s` is not set", botTokenVar)
		return nil, errors.New(errMsg)
	}
	return slack.New(token, options...), nil
}

func NewSlackUserClient(ctx context.Context, c *firestore.Client, uuid string, options ...slack.Option) (*slack.Client, error) {
	dsnap, err := c.Collection("user_sample").Doc(uuid).Get(ctx)
	if err != nil {
		return nil, err
	}

	token, err := dsnap.DataAt("OAuthToken")
	if err != nil {
		return nil, err
	}

	tokenStr, ok := token.(string)
	if !ok {
		return nil, errors.New("`OAuthToken` cannot be casted to string")
	}

	return slack.New(tokenStr, options...), nil
}

// チャンネルを作成してそのIDを返す
func CreateChannel(channelName string) (string, error) {
	api, err := NewSlackBotClient()
	if err != nil {
		return "", err
	}

	ch, err := api.CreateConversation(channelName, false)
	if err != nil {
		return "", err
	}

	return ch.ID, nil
}
