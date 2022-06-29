# Backend 開発

## 環境

Go 1.18 を想定しています。

## 実行方法

以下の操作はすべて `backend/` ディレクトリで行ってください。

### 依存関係のインストール

```sh
$ go mod download
```

### 設定ファイルのセットアップ

`.env.example` を `.env` にコピーし、必要に応じて設定を変更してください。
- `GOOGLE_APPLICATION_CREDENTIALS`：Firebase の API キーへのパス（**変更しないでください**）
- `ADDRESS`：サーバを立ち上げるアドレス（デフォルト：`:8000`）

### 実行

```sh
$ go run main.go
```

上記を実行すると、ローカルサーバ（デフォルトは http://localhost:8000 ）が立ち上がります。

## API（実装予定）

- `${ADDRESS}/api/editProfile`：自己紹介フォームから送信された json 形式の POST リクエストを受け取り、FireStore に登録・上書きおよび Slack に自己紹介文を投稿します。
- `${ADDRESS}/api/getMatching`：フロントエンドから送信された GET リクエストを受け取り、ユーザのマッチング情報等を返します。

## ディレクトリ構成

```sh
backend/
├── model/               # データの処理を行う
│   ├── db/
│   │   └── firebase.go
│   ├── matching/ ●      # マッチング用の処理を書く
│   │   ├── matching.go
│   │   └── ...
│   └── profile/  ●      # 自己紹介の登録処理を書く
│       ├── profile.go
│       └── ...
├── router/              # APIリクエストに対する処理を行う
│   ├── auth/            # 認証部分の処理
│   │   └── auth.go
│   ├── handler/  ●      # HTTPハンドラ
│   │   ├── matching.go
│   │   └── profile.go
│   └── router.go
├── go.mod
├── go.sum
└── main.go              # エントリポイント
```

主に ● がついている部分を実装する感じになると思います。

## その他
モジュール名は `tsunagg/backend` にしています。例えば、`foo/bar` 配下にあるパッケージであれば
```go
import "tsunagg/backend/foo/bar"
```
のようにして参照できます。
