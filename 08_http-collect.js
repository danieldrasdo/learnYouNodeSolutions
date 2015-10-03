var http = require('http'),
    url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('error', function (error) {
        console.error(error);
    });
    var totalData = '';
    response.on('data', function (data) {
        totalData += data;
    });
    response.on('end', function (data) {
        console.log(totalData.length);
        console.log(totalData);
    });
});
