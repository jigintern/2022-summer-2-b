# Insto Atlas

## 環境構築

### node_modulesのインストール

```bash
yarn install
```

### Firebase Firestore Database 設定

<img width="1080" alt="image" src="https://user-images.githubusercontent.com/1715217/187071172-4d446a6c-b291-4589-89bf-bbeb0297c16c.png">

- ルールを「allow read,write;」にする

### Firebase Storage 設定

- ルールを「allow read,write;」にする

### Firebase アプリ設定

- アプリを追加、ウェブアプリ
- コンソールで「deno run https://code4fukui.github.io/firebase-util/makeenv.js '」とペースト ([firebase-util](https://github.com/code4fukui/firebase-util)使用)
- Firebase アプリからの接続用の Config をコピー、コンソールで貼り付けて、「'」を追加して、エンター
- 表示された環境設定用のスクリプトを実行（必要に応じて、ファイルにしておく）

## 起動方法

サーバ起動
```bash
yarn dev
```
