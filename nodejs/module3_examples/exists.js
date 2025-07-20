const fs = require('fs')
if (fs.existsSync('output.txt')) {
    console.log('File exists.');
} else {
    console.log('File does not exist.');
}