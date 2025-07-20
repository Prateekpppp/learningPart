const fs = require('fs');

const folderPath = './watched_folder'; // Change this to the folder you want to watch

fs.watch(folderPath, (eventType, filename) => {
    if (filename) {
        console.log(`Change detected in ${filename}: ${eventType}`);
    } else {
        console.log(`Change detected: ${eventType}`);
    }
});

console.log(`Watching for changes in ${folderPath}...`);
