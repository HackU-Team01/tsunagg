package db

import (
	"context"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
)

func NewFirestoreClient() *firestore.Client {
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		panic(err)
	}

	client, err := app.Firestore(context.Background())
	if err != nil {
		panic(err)
	}

	return client
}
