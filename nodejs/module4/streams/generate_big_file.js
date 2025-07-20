const fs = require('fs');

const fileName = 'bigfile.txt';
const totalLines = 10e6; // 30 million lines
const batchSize = 1e6; // Write in chunks of 1 million lines

const writeStream = fs.createWriteStream(fileName);

console.time('File Generation');

function writeBatch(start) {
    let data = '';

    for (let i = start; i < start + batchSize && i < totalLines; i++) {
        data += `This is line number ${i}\n`;
    }

    if (!writeStream.write(data)) {
        writeStream.once('drain', () => writeBatch(start + batchSize)); // Wait for drain before continuing
    } else if (start + batchSize < totalLines) {
        process.nextTick(() => writeBatch(start + batchSize)); // Prevent blocking the event loop
    } else {
        writeStream.end();
    }
}

writeStream.on('finish', () => {
    console.timeEnd('File Generation');
    console.log(`${fileName} generated successfully with ${totalLines} lines!`);
});

writeBatch(0);
