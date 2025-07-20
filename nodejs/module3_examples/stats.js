const fs = require('fs');
fs.stat('example.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File stats:", stats);
});
