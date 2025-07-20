const fs  = require('fs')
fs.readdir('./xyz', (err, files) => {
    console.log("Directory contents:", files);
});
