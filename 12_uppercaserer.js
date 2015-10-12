// sudo npm install through2-map

var map = require('through2-map'),
    http = require('http'),
    port = process.argv[2];

var server = http.createServer(function(request, response) {
    if(request.method !== "POST") {
        return response.end(null);
    }
    request.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server.listen(port);
