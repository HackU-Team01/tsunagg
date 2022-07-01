package response

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type ResponseErrorType string

const (
	FirestoreError   ResponseErrorType = "firestore"
	InvalidArgsError ResponseErrorType = "invalid_args"
	NotAuthedError   ResponseErrorType = "not_authed"
	SlackError       ResponseErrorType = "slack"
)

type Response struct {
	Ok    bool              `json:"ok"`
	Error ResponseErrorType `json:"error,omitempty"`
}

func writeResponse(w http.ResponseWriter, ok bool, e ResponseErrorType) {
	w.Header().Set("Content-Type", "application/json")

	r := Response{Ok: ok, Error: e}
	if err := json.NewEncoder(w).Encode(r); err != nil {
		fmt.Fprintf(os.Stderr, "Writing response failed: %v", err)
	}
}

func OK(w http.ResponseWriter) {
	writeResponse(w, true, "")
}

func NG(w http.ResponseWriter, e ResponseErrorType) {
	writeResponse(w, false, e)
}
