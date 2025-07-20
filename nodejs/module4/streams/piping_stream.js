const fs = require("fs");
const readStream = fs.createReadStream('../../bigfile.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

readStream.on('end', () => console.log('File copied successfully'));
