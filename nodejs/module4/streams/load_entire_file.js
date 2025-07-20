const fs = require('fs');

fs.readFile('../../bigfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data)
});





























//Node.js has a string size limit (~512MB)