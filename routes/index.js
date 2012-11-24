
// For XMLHttpRequest demo
var xhr = require('./xhr_api');


exports.api_server_time  = xhr.server_time;
exports.api_get_json     = xhr.get_json;
exports.api_give_me_json = xhr.give_me_json;


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



var UPLOAD_DIR = require('path').normalize(__dirname + '/../upload/');

/**
 * File upload
 *
 */
exports.upload = function(req, res) {

  var fileName = (new Date() - 0) + '_' + fileName;
  var out = require('fs').createWriteStream(UPLOAD_DIR + fileName, { 
      flags: 'w', 
      encoding: 'utf-8', 
      mode: 0644 
  });
  
  var buffer = "";
  req.on('data', function(data) {
    out.write(data);
  });
  req.on('end', function() {
    out.end();
    res.send('OK');
  });
}
