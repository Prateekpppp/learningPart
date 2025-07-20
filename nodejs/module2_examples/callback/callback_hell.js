function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1000);
}

// Callback Hell (Nested Callbacks)
task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed (Callback)");
        });
    });
});