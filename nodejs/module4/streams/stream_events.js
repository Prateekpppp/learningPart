const fs = require('fs')
const stream = fs.createReadStream('example123.txt', { encoding: 'utf-8' });

stream.on('open', function() {
    console.log('Stream opened')
});

stream.on('data', function(chunk) {
    console.log('Received data:', chunk)
}); 

stream.on('end', function() {
    console.log('Stream ended')
});

stream.on('error', function(err) {
    console.error('Stream error:', err)  
});
