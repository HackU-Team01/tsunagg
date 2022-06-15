# Backend 開発

## 環境

Go 1.18 を想定しています。

## 実行方法

```sh
$ go run main.go
```

`backend` ディレクトリで上記を実行すると、ローカルサーバ（http://localhost:8080）が立ち上がります。
現状では Hello world を出力するダミープログラムが走るようになっていますが、後々書き換えていきます。

## その他
モジュール名は `tsunagg/backend` にしています。例えば、`foo/bar` 配下にあるパッケージであれば
```go
import "tsunagg/backend/foo/bar"
```
のようにして参照できます。
