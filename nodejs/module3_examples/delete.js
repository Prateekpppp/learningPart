const fs = require('fs')
fs.unlink('output.txt', (err) => {
    console.log("File deleted successfully");
});
