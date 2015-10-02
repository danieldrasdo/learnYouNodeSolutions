var fs = require('fs'),
    filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function finishedReading(error, fileContents) {
    if (error) {
        return console.error(error);
    }
    var numLines = fileContents.split('\n').length - 1;
    console.log(numLines);
})
