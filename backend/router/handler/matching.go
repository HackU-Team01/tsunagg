package handler

import (
	"net/http"

	"cloud.google.com/go/firestore"
)

func GetMatchingHandler(c *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// TODO: implement this field
	}
}
