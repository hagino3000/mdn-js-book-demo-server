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
  app.use(express.bodyParser());
  app.use(express.methodOverride());
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


/////////////////////////////////////////////
// Bootpoint
/////////////////////////////////////////////
app.listen(3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    app.address().port, app.settings.env);
});

process.on('uncaughtException', function(err) {
  console.error(err);
  //process.exit(1);
});

