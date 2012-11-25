'use strict';

require('date-utils');

/**
 * Returns server time width interval
 */
exports.api_server_time = function(req, res) {
  setTimeout(function() {
    res.send(new Date().toFormat('YYYY-MM-DD HH24:MI:SS'))
  }, 500);
}

/**
 * Returns some JSON
 *
 */
exports.api_get_json = function(req, res) {
  res.header('Content-Type', 'application/json');
  res.send(jsonData);
}

/**
 * Receive JSON and returns JSON
 */
exports.api_give_me_json = function(req, res) {
  var user = req.body;

  // ユーザー登録の様な処理があるとする
  user.id = 100;
  user.created = new Date().toFormat('YYYY-MM-DDTHH24:MI:SS');

  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({
    status: 'success',
    result: user
  }));
}

/**
 * PJAX page
 *
 */
exports.getPage = function(req, res) {
  res.setHeader('ContentType', 'text/html');
  res.render(req.params.id, {
    allPage: !req.headers['x-pjax'],
    title: 'Pages'
  });
}

var UPLOAD_DIR = require('path').normalize(__dirname + '/upload/');

/**
 * File upload
 *
 */
//exports.upload = function(req, res) {
//
//  var fileName = (new Date() - 0) + '_' + req.headers['x-file-name'];
//  var out = require('fs').createWriteStream(UPLOAD_DIR + fileName, { 
//      flags: 'w', 
//      encoding: 'utf-8',
//      mode: '0644'
//  });
//  
//  var buffer = "";
//  req.on('data', function(data) {
//    out.write(data);
//  });
//  req.on('end', function() {
//    out.end();
//    res.send('OK');
//  });
//}
//

exports.upload = function(req, res) {

  // ファイル名はタイムスタンプ + オリジナルのファイル名とする
  var fileName = (new Date() - 0) + '_' + req.headers['x-file-name'];

  // リクエストをファイル書き込みストリームにパイプで渡す
  req.pipe(require('fs').createWriteStream(UPLOAD_DIR + fileName, { 
      flags: 'w', 
      encoding: 'utf-8',
      mode: '0644'
  }))
  .on('close', function() {
    // 書き込み終了時にレスポンスを返す
    res.send('OK');
  })
  .on('error', function() {
    // エラーが発生したらエラー500を返す
    res.send('NG', 500);
  });
}
