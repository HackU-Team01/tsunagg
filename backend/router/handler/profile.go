package handler

import (
	"net/http"

	"cloud.google.com/go/firestore"
)

func EditProfileHandler(c *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// TODO: implement this field
	}
}
