
var users = [
	{name: 'JT', email: 'jt@aol.com'},
	{name: 'Tobi', email: 'tobi@aol.com'},
];

exports.list = function(request, response) {
	response.render('index', {brand: 'Yolo! Express', title: 'Users', users: users})
};