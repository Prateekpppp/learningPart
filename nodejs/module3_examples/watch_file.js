const fs = require('fs')
fs.watch('example.txt', (eventType, filename) => {
    console.log(`File ${filename} changed: ${eventType}`);
});
