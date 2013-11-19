// http://net.tutsplus.com/tutorials/javascript-ajax/introduction-to-express/
//
var PORT = 3000;
var express = require('express');
console.log("Starting Server... ");
var app = express();

// includes the handlebars
var hbs = require('hbs');

// load the blog data/engine (at this point they're the same)
var blogEngine = require('./blog');
var data = {brand: 'Yolo! Express'};
var user = require('./user').init(data);


// set the engine to look for .html files in addition to .hbs
app.set('view engine', 'html');

// load the handlebars
app.engine('html', hbs.__express);

//app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
	console.log(blogEngine.getBlogEntries);
  res.render('index', {brand: data.brand, title: 'Yolo! Express', entries: user.getBlogEntries});
});

app.get('/about', function(req, res) {
  res.render('about', {brand: data.brand, title: 'Aboutn Yolo! Express'});
});

app.get('/article/:id', function(req, res) {
	// var entry = blogEngine.getBlogEntry(req.params.id);
  // res.render('article', {brand: 'Yolo! Express', title:entry.title, blog:entry});
});

app.all('/users', user.list);

console.log("Listening on port: " + PORT);
app.listen(PORT);