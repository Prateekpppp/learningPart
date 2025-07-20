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

// boilWater()
// .then(addPasta)
// .then(drainWater)
// .then(addSauceAndServe)

async function makePasta() {
    const result1 = await boilWater()
    const result2 = await addPasta(result1)
    const result3 = await drainWater(result2)
    const finalResult = await addSauceAndServe(result3)
    console.log(finalResult)
}

makePasta();