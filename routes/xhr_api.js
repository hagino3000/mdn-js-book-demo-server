'use strict';

require('date-utils');

exports.server_time = function(req, res) {
  setTimeout(function() {
    res.send(new Date().toFormat('YYYY-MM-DD HH24:MI:SS'))
  }, 500);
}

exports.get_json = function(req, res) {
  res.header('Content-Type', 'application/json');
  res.send(jsonData);
}

exports.give_me_json = function(req, res) {
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





var jsonData = '{"completed_in":0.017,"max_id":259911096121581570,"max_id_str":"259911096121581570","next_page":"?page=2&max_id=259911096121581570&q=javascript&rpp=1","page":1,"query":"javascript","refresh_url":"?since_id=259911096121581570&q=javascript","results":[{"created_at":"Sun, 21 Oct 2012 06:56:48 +0000","from_user":"thierrymichel","from_user_id":14526463,"from_user_id_str":"14526463","from_user_name":"thierrymichel","geo":null,"id":259911096121581570,"id_str":"259911096121581570","iso_language_code":"fr","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/1165564882\/tm-avatar-pixel-512_normal.gif","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/1165564882\/tm-avatar-pixel-512_normal.gif","source":"&lt;a href=&quot;http:\/\/tapbots.com\/tweetbot&quot;&gt;Tweetbot for iOS&lt;\/a&gt;","text":"@ParisWeb: Le diaporama de la conf\u00e9rence \u2026 est publi\u00e9 -&gt; Flash player 8+ et JavaScript sont requis pour voir le diaporama. :-\/","to_user":"ParisWeb","to_user_id":82103983,"to_user_id_str":"82103983","to_user_name":"Paris-Web"}],"results_per_page":1,"since_id":0,"since_id_str":"0"}';
