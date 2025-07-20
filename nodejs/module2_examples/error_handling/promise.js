function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Error: Cannot divide by zero");
        } else {
            const result = a / b;
            resolve(result);
        }
    });
}

divide(10, 2)
    .then(result => console.log("Result:", result))
    .catch(error => console.error(error));