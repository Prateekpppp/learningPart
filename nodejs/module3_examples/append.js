const fs = require("fs").promises;

// Synchronous
try {
    fs.appendFile('output.txt', '\n vikram.', 'utf8')
    .then(()=>{
        console.log("Appended text (Sync)");
    });
   
} catch (err) {
    console.error(err);
}


