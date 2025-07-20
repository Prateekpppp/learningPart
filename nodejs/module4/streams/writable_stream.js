const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('this is a stream example!\n');
writableStream.write('this is a stream example!\n');
writableStream.write('this is a stream example!\n');
writableStream.write('Final chunk of data.');

writableStream.on('finish', () => {
    console.log('Finished writing to the file');
});
