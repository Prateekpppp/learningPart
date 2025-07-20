const fs  = require('fs')
fs.rename('example.txt', 'sample.txt', (err) => {
    console.log("File renamed successfully");
});
