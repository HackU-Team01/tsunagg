# Frontend開発

## 環境

`package.json` を参照ください。

## 使用しているパッケージ

### [`tailwindcss`](https://tailwindcss.com/)

プロジェクトのスタイリングは Tailwind CSS を使用しています。`postcss` と `autoprefixer` も一緒に使用しています。

### [`next-head-seo`](https://github.com/catnose99/next-head-seo)

catnose さんが作成した SEO カスタマイズ系の軽量パッケージです。`Layout` コンポーネントで使用しています。
→特に使わなくてもいいかな。。とは思ったんですが良さそうだったので入れました。

### [`husky`](https://typicode.github.io/husky/#/)

`husky` は、git でコミットする直前に登録したコマンドを実行してくれるツールです。コミット前に Prettier と ESLint を走らせるようにしています。
（カスタマイズするとプッシュ前にコマンドは走らせることもできる）
→初めて使うんですが割と便利そうだったので入れました。

あわせて [`lint-staged`](https://github.com/okonet/lint-staged) も使用していて、こちらは stage に上がっているファイルに対して Lint をかけてくれるツールです。

# 開発に参加するまでの流れ

以下の手順を踏んで開発に参加しましょう。

## 1. `git clone`

以下のコマンドを実行してクローンします。

```shell
git clone https://github.com/HackU-Team01/tsunagg.git
```

## 2. `npm install`

`npm install`を行います。`npm`のバージョンは Volta で固定していますが、Volta を使っていない人は、`npm -v`で 8 系かどうかを確かめます。

```shell
#npmのバージョンを確認（8系でない場合は、8系をインストール）
npm -v

#ディレクトリの移動(必ずfrontend配下で以降のコマンドを実施してください)
cd frontend

#パッケージをインストール
npm install
```

## 3. `npm run dev`

`npm run dev`でローカルサーバー(http://localhost:3333/)を立ち上げます。

```shell
npm run dev
```

# ディレクトリ構成について

今回は、すべてのファイルを `src` に入れています。
コンポーネントのディレクトリは機能ベースで切る方針をとっています。

```js
.
├── .next
├── public // 画像ファイルを格納する
├── src
│   ├── components // コンポーネントは機能ベースでディレクトリを切る
│   │   ├── common // 複数の機能にまたがって使用するコンポーネント
│   │   │   ├── parts // さらにコンポーネントの中で使い回せるものはpartsに切り出す
│   │   │   │   ├── Button.tsx
│   │   │   │   └── ...
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ...
│   │   ├── form // 例: フォームの機能で使用するコンポーネント
│   │   └── ...
│   ├── hooks // カスタムフックを配置する
│   ├── lib // APIを叩く処理やClassでの型定義ファイルを配置する
│   ├── pages // ページテンプレートを配置する
│   │   ├── api
│   │   │   └──hello.ts //デフォルトのやつ
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles
...
```

