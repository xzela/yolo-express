// http://net.tutsplus.com/tutorials/javascript-ajax/introduction-to-express/
//
var PORT = 3000;
var express = require('express');
console.log("Starting Server... ");
var app = express();

// includes the handlebars
var hbs = require('hbs');

var blogEngine = require('./blog');

// set the engine to look for .html files in addition to .hbs
app.set('view engine', 'html');

// load the handlebars
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  res.render('index', {title: 'Yolo! Express'});
});

app.get('/about', function(req, res) {
  res.render('index', {title: 'Aboutn Yolo! Express'});
});

app.get('/article', function(req, res) {
  res.render('about');
});

console.log("Listening on port: " + PORT);
app.listen(PORT);