'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    routes = require('./routes');

var app = module.exports = express.createServer();

/////////////////////////////////////////////
// Server Settings
/////////////////////////////////////////////
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/////////////////////////////////////////////
// Routing
/////////////////////////////////////////////
app.get('/api/get_server_time', routes.api_server_time);
app.get('/api/get_json', routes.api_get_json);
app.post('/api/give_me_json', routes.api_give_me_json);
app.get('/pages/:id?', routes.getPage);

app.post('/upload', routes.upload);

// データストアとしてRedisを使用
var redis = require("redis"),
    client = redis.createClient();

/**
 * ユーザー操作
 *
 * @param req HTTPリクエスト
 * @param res HTTPレスポンス
 */
app.post('/api/user', function(req, res) {

  res.header('Content-Type', 'application/json');

  var data   = req.body;
  var method = req.body.method;

  if (method == 'get') {
    // ユーザーIDをキーに取得した結果を返す
    var key = 'user:' + data.userId;
    client.get(key, function(err, reply) {
      // ObjectをJSON文字列にしてレスポンスBodyとする
      res.send(JSON.stringify({
        error: null,
        result: JSON.parse(reply)
      }));
    });

  } else if (method == 'add') {
    // ユーザー登録
    // ユーザーIDを採番する
    client.incr('userIdSeq', function(err, userId) {

      // ユーザーIDと登録日をセット
      var newUser = data.user;
      newUser.id = userId;
      newUser.created = new Date();

      // 保存
      var key = 'user:' + userId;
      client.set(key, JSON.stringify(newUser));

      // ObjectをJSON文字列にしてレスポンスBodyとする
      res.send(JSON.stringify({
        error: null,
        result: newUser
      }));
    });

  } else if (method == 'update') {
    /* 中略 */
  }
});

client.get('userIdSeq', function(err, reply) {
  if (reply == null) {
    client.set('userIdSeq', 1, redis.print);
  } else {
    console.log('Current UserID is', reply.toString());
  }
});



/////////////////////////////////////////////
// Bootpoint
/////////////////////////////////////////////
app.listen(3002, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    app.address().port, app.settings.env);
});

process.on('uncaughtException', function(err) {
  console.error(err);
  //process.exit(1);
});

