const fs = require('fs');

// Synchronous
try {
    fs.readFile('example.txt', 'utf8').then((content)=>{
        console.log("content: ",content)
    }).then(()=>{
        console.log("second one:");
    });
    
} catch (err) {
    console.error(err);
}

