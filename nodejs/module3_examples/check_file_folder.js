const fs = require('fs');
const path = 'apple'; // Change this to test with a directory

fs.stat(path, (err, stats) => {

    if (stats.isFile()) {
        console.log(`${path} is a file.`);
    } else if (stats.isDirectory()) {
        console.log(`${path} is a directory.`);
    } else {
        console.log(`${path} is neither a file nor a directory.`);
    }
});