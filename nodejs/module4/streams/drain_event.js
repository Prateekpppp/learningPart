const fs = require("fs");
const { Transform } = require("stream");

// Create a transform stream to convert text to uppercase
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase()); // Convert to uppercase
        callback();
    }
});

const readStream = fs.createReadStream("../../bigfile.txt");
const writeStream = fs.createWriteStream("output.txt");

// Handle the 'drain' event
writeStream.on("drain", () => {
    console.log("✅ Buffer drained! Resuming writing...");
});

// Pipe the read stream through the transform stream, then into the write stream
readStream.pipe(upperCaseTransform).pipe(writeStream);

readStream.on("end", () => console.log("✅ File copied successfully with uppercase transformation!"));
