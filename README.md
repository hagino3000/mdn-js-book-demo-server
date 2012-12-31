# MDN『すべての人に知っておいてほしいJavaScriptの基本原則』Chap7, Chap8 サンプルコード

Chapter7とChapter8のサンプルコードです。

## サンプルコード

HTML + JavaScriptのコードは public 以下にあります。一覧は public/index.html を参照してください。
サーバーのコードは server.js と routes.js です。

## サーバーの起動

Chapter7とChapter8のファイルアップロードのサンプルを動作させるには、サーバーの起動が必要です。

### サーバーの動作に必要な物

- Node.js v0.6.x
- Redis

MacOS 10.8とUbuntu 12.04.1 LTSで動作確認をしています。

### セットアップ

    $ make setup

Node.jsのモジュールが配置されます。

### 起動

    $ make run

起動後、次のURLをブラウザで開いてください http://localhost:3002/index.html
