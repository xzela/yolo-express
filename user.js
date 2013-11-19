
var data = {};

var users = [
	{id:1, name: 'JT', email: 'jt@aol.com'},
	{id:2, name: 'Tobi', email: 'tobi@aol.com'},
];

exports.init = function(mixin) {
	data = mixin;
	return exports;
};

exports.list = function(request, response) {
	response.render('users', {brand: data.brand, title: 'Users', users: users})
};