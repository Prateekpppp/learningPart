// Synchronous
try {
    fs.writeFileSync('output.txt', 'Hello, Node.js!', 'utf8');
    console.log("File written successfully (Sync)");
} catch (err) {
    console.error(err);
}

// Asynchronous
fs.writeFile('output.txt', 'Hello, Node.js Async!', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully (Async)");
});
