var http = require('http'),
    urlArr = [];
urlArr.push(process.argv[2]);
urlArr.push(process.argv[3]);
urlArr.push(process.argv[4]);

function logUrlContents (url,position) {
    if (position <= urlArr.length) {
        http.get(url[position], function (response) {
            response.setEncoding('utf8');
            response.on('error', function (error) {
                console.error(error);
            });
            var totalData = '';
            response.on('data', function (data) {
                totalData += data;
            });
            response.on('end', function (data) {
                console.log(totalData);
                position++;
                logUrlContents(urlArr,position);
            });
        });
    }
}
logUrlContents(urlArr,0);
