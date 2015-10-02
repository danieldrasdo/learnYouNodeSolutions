var fs = require('fs'),
    filePath = process.argv[2],
    numLines = fs.readFileSync(filePath).toString().split('\n').length - 1;
console.log(numLines);