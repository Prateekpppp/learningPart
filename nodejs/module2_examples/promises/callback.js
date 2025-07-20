function task1(callback) {
    setTimeout(function(){
        console.log("Task 1 completed");
        callback();
    }, 1000);
}

function task2() {
    console.log("Task 2 completed")
}

task1(task2);