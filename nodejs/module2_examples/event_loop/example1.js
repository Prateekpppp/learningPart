console.log("1. Start");

//moves to the Callback Queue (macrotask).
setTimeout(() => {
    console.log("2. Inside setTimeout");
}, 0);

console.log("3. End");

