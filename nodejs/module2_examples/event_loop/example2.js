console.log("1. Start");
//Macrotask Queue
setTimeout(() => {
    console.log("2. Inside setTimeout");
}, 0);
//Microtask Queue
Promise.resolve().then(() => {
    console.log("3. Inside Promise");
});

console.log("4. End");