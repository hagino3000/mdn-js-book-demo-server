# MDN『すべての人に知っておいてほしいJavaScriptの基本原則』Chap7, Chap8 サンプルコード

「Chapter7 Ajaxを使った通信」と「Chapter8 HTML5と関連API」のサンプルコードです。

[Amazon.co.jp:すべての人に知っておいてほしい JavaScriptの基本原則: 岩永 賢明, 勝間 亮, 嶋田 大輔, 土屋 勇人, 西林 孝, 比留間 和也, 吉田 雷: 本](http://www.amazon.co.jp/dp/4844363123)

## サンプルコード

HTML + JavaScriptのコードは public 以下にあります。一覧は public/index.html を参照してください。
サーバーのコードは server.js と routes.js です。

## サーバーの起動

Chapter7とChapter8のファイルアップロードのサンプルを動作させるには、サーバーの起動が必要です。

### サーバーの動作に必要な物

- Node.js v0.8.x
- Redis

MacOS 10.8とUbuntu 12.04.1 LTSで動作確認をしています。

### セットアップ

    $ make setup

Node.jsのモジュールが配置されます。

### 起動

    $ make run

起動後、次のURLをブラウザで開いてください http://localhost:3002/index.html
