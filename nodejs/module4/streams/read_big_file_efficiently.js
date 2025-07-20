const fs = require('fs');

const readStream = fs.createReadStream('../../bigfile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
        console.log(chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file');
});

readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
