var net = require('net'),
    port = process.argv[2];

function formatZeros(value) {
    if (value < 10) {
        value = '0'+value;
    }
    return value;
}

var server = net.createServer(function (socket) {
    var date = new Date();
    var year = formatZeros(date.getFullYear());
    var month = formatZeros(date.getMonth() + 1);
    var day = formatZeros(date.getDate());
    var hour = formatZeros(date.getHours());
    var minute = formatZeros(date.getMinutes());
    
    var formattedDateAndTime = year+ '-' +month+ '-' +day+ ' ' +hour+ ':' +minute;
    
    socket.write(formattedDateAndTime + '\n');
    socket.end();
});
server.listen(port);
