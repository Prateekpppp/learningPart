function boilWater(nextStep) {
    setTimeout(() => {
        console.log("Step 1: Water is boiled.");
        const step1Result = "Boiled Water"
        nextStep(step1Result);
    }, 1000);
}

function addPasta(previousStepResult, nextStep) {
    setTimeout(() => {
        console.log(`Step 2: Added pasta to ${previousStepResult}.`);
        const step2Result = "Cooked Pasta";
        nextStep(step2Result);
    }, 1000);
}

function drainWater(previousStepResult, nextStep) {
    setTimeout(() => {
        console.log(`Step 3: Drained water from ${previousStepResult}.`);
        const step3Result = "Drained Pasta"
        nextStep(step3Result);
    }, 1000);
}

function addSauceAndServe(previousStepResult, nextStep) {
    setTimeout(() => {
        console.log(`Step 4: Added sauce to ${previousStepResult} and served.`);
        const step4Result = "Delicious Pasta 🍝";
        nextStep(step4Result);
    }, 1000);
}

// nextStep Chain (Passing Data)
boilWater((boiledWater) => {
    addPasta(boiledWater, (cookedPasta) => {
        drainWater(cookedPasta, (drainedPasta) => {
            addSauceAndServe(drainedPasta, (finalDish) => {
                console.log(`Final Result: ${finalDish}`);
            });
        });
    });
});
