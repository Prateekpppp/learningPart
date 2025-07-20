const fs = require('fs');

const readStream = fs.createReadStream('../../bigfile.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('output.txt');

let lineCount = 0;

readStream.on('data', (chunk) => {
    const lines = (chunk).split('\n'); // Split chunk into lines

    let i = 0;
    while (i < lines.length && lineCount < 100) {
        writeStream.write(lines[i] + '\n');
        lineCount++;
        i++;
    }

    if (lineCount >= 100) {
        readStream.destroy(); // Stop reading after 100 lines
    }
});

readStream.on('close', () => {
    writeStream.end(); // Close write stream after reading stops
    console.log('First 100 lines copied to output.txt successfully!');
});
