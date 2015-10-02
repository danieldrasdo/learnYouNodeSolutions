var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
    sum += +process.argv[i]; //the '+' in '+process.argv[i]' coerces the value into a number, in case 'process.argv[i]' is a string. Could have used 'Number(process.argv[i])' as well.
}
console.log(sum);