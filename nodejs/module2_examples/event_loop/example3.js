console.log("1. Start");

setTimeout(() => {
    console.log("2. First Timeout");

    setTimeout(() => {
        console.log("3. Second Timeout");
    }, 0);
}, 0);

console.log("4. End");