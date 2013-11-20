
var mysql = require('mysql');
var data = {};
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

function funk(list) {
	console.log(list);
	return list;
}

var users = function(callback) {
	connection.query('USE yoloexpress;', null,
		function(err) {
			if (err) throw err;
			return connection.query("SELECT * FROM users;", null,
				function(err, result) {
					if (err) {
						throw err;
					}
					callback(result);
				});
		});
};

exports.init = function(mixin) {
	data = mixin;
	return exports;
};

exports.list = function(request, response) {
	response.render('users', {brand: data.brand, title: 'Users', users: users(funk)})
};

exports.add = function(request, response) {
	connection.query('USE yoloexpress;', null, function(err) {
		if (err) {
			throw err
		}
		console.log(request.body)
		// connection.query("INSERT INTO users (name, email) value ", )
	});
	response.render('users', {brand: data.brand, title: 'Users', users: []})
};