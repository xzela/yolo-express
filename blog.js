// var entries = [
// {"id":1, "title":"Hello World!", "body":"This is the body of my blog entry. Sooo exciting.", "published":"6/2/2013"},
// {"id":2, "title":"Eggs for Breakfast", "body":"Today I had eggs for breakfast. Sooo exciting.", "published":"6/3/2013"},
// {"id":3, "title":"Beer is Good", "body":"News Flash! Beer is awesome!", "published":"6/4/2013"},
// {"id":4, "title":"Mean People Suck", "body":"People who are mean aren't nice or fun to hang around.", "published":"6/5/2013"},
// {"id":5, "title":"I'm Leaving Technology X and You Care", "body":"Let me write some link bait about why I'm not using a particular technology anymore.", "published":"6/10/2013"},
// {"id":6, "title":"Help My Kickstarter", "body":"I want a new XBox One. Please fund my Kickstarter.", "published":"6/12/2013"}];

// exports.getBlogEntries = function() {
//    return entries;
// }

exports.getBlogEntry = function(id) {
	entries = exports.getBlogEntries();
   for(var i=0; i < entries.length; i++) {
      if(entries[i].id == id) return entries[i];
   }
}


var http = require('http')

var options = {
	host: 'api.icndb.com',
	port: 80,
	path: '/jokes/random'
};

exports.getBlogEntries = function() {
	var d = http.get(options, function(resp) {
		// console.log(resp);
		console.log("Got response: " + resp.statusCode);
		return resp.on('data', function(chunk) {
			var temp = JSON.parse(chunk)
			var data = [{id: 1, title: temp.type, body: temp.value.joke}]
			return data
		});
	}).on("error", function(e){
		console.log("Got error: " + e.message);
	});
	// console.log(d)
	return d;
}

