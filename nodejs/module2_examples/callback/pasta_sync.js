function boilWater() {
    console.log("Step 1: Water is boiled.");
    const step1Result = "Boiled Water";
    return step1Result;
}

function addPasta(previousStepResult) {
    console.log(`Step 2: Added pasta to ${previousStepResult}.`);
    const step2Result = "Cooked Pasta";
    return step2Result;
}

function drainWater(previousStepResult) {
    console.log(`Step 3: Drained water from ${previousStepResult}.`);
    const step3Result = "Drained Pasta"
    return step3Result;
}

function addSauceAndServe(previousStepResult) {
    console.log(`Step 4: Added sauce to ${previousStepResult} and served.`);
    const step4Result = "Delicious Pasta 🍝"
    return step4Result;
}

// Sequential Execution
const boiledWater = boilWater();
const cookedPasta = addPasta(boiledWater);
const drainedPasta = drainWater(cookedPasta);
const finalDish = addSauceAndServe(drainedPasta);
console.log(`Final Result: ${finalDish}`);