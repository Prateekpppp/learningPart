function divide(a, b, callback) {
    if (b === 0) {
        callback("Error: Cannot divide by zero", null);
    } else {
        const result = a / b;
        callback(null, result);
    }
}

divide(10, 2, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Result:", result);
    }
});