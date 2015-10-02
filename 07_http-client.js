var http = require('http'),
    url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('error', function (error) {
        console.error(error);
    });
    response.on('data', function (data) {
        console.log(data);
    });
});
