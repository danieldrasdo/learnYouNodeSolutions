var fs = require('fs'),
    path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function finishedReading (error, filesArr) {
        if (error) {
            return callback(error, null);
        }
        var filteredArr = [];
        filesArr.forEach(function (file) {
            if (path.extname(file) === '.' + extension) {
                filteredArr.push(file);
            }
        });
        callback(null, filteredArr);
    });
};
