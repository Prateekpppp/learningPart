function boilWater(callback) {
    console.log("Step 1: Water is boiled.");
    const step1Result = "Boiled Water";
    callback(step1Result);
}

function addPasta(previousStepResult, callback) {
    console.log(`Step 2: Added pasta to ${previousStepResult}.`);
    const step2Result = "Cooked Pasta";
    callback(step2Result);
}

function drainWater(previousStepResult, callback) {
    console.log(`Step 3: Drained water from ${previousStepResult}.`);
    const step3Result = "Drained Pasta";
    callback(step3Result);
}

function addSauceAndServe(previousStepResult) {
    console.log(`Step 4: Added sauce to ${previousStepResult} and served.`);
    const step4Result = "Delicious Pasta 🍝";
    console.log("final result " + step4Result)
}

// nextStep Chain (Passing Data)
boilWater((step1Result)=>{
    addPasta(step1Result, (step2Result)=>{
        drainWater(step2Result, (step3Result)=>{
            addSauceAndServe(step3Result)
        })
    })
});