var http = require('http'),
	url = require('url'),
	port = process.argv[2],
	returnedObject = '';

function parseTime(date) {
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	};
}
function parseUnixTime(date) {
	return {
		"unixtime": date.getTime()
	};
}

var server = http.createServer(function(request, response) {
	var parsedUrl = url.parse(request.url, true);
	var isoTime = parsedUrl.query.iso;
	var pathName = parsedUrl.pathname;
	var dateObject = new Date(isoTime);

	if (pathName == '/api/parsetime') {
		returnedObject = parseTime(dateObject);
	} else if (pathName == '/api/unixtime') {
		returnedObject = parseUnixTime(dateObject);
	}
    
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(returnedObject));
});
server.listen(port);
