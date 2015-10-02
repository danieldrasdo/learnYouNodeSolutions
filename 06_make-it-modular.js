var filterModule = require('./06b_make-it-modular-filter'),
    directory = process.argv[2],
    extension = process.argv[3];

filterModule (directory, extension, function (error, filteredArr) {
    if (error) {
        return console.error(error);
    }
    filteredArr.forEach (function (file) {
        console.log(file);
    });
});
