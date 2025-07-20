const fs = require('fs');

console.time('fs.createReadStream');

const readStream = fs.createReadStream('../../bigfile.txt', { encoding: 'utf8' });

let chunkCount = 0;

readStream.on('data', (chunk) => {
    chunkCount++;
    if(chunkCount ===1){
        console.log(chunk);
    }

});

readStream.on('end', () => {
    console.log('Finished reading file');
    console.timeEnd('fs.createReadStream');
});

readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
