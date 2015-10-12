var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    fileLocation = process.argv[3];

var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(fileLocation);
    stream.pipe(response);
})
server.listen(port);
