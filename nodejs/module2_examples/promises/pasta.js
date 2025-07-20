function boilWater() {
    return new Promise((resolve) => {
            console.log("Step 1: Water is boiled.");
            resolve("Boiled Water");
    });
}

function addPasta(previousStepResult) {
    return new Promise((resolve) => {
            console.log(`Step 2: Added pasta to ${previousStepResult}.`);
            resolve("Cooked Pasta");
    });
}

function drainWater(previousStepResult) {
    return new Promise((resolve) => {
            console.log(`Step 3: Drained water from ${previousStepResult}.`);
            resolve("Drained Pasta");
    });
}

function addSauceAndServe(previousStepResult) {
    return new Promise((resolve) => {
            console.log(`Step 4: Added sauce to ${previousStepResult} and served.`);
            resolve("Delicious Pasta 🍝");
    });
}

// Chaining promises
boilWater()
    .then(addPasta)
    .then(drainWater)
    .then(addSauceAndServe)
    .then((finalDish) => {
        console.log(`Final Result: ${finalDish}`);
    })