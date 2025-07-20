function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}

function task2() {
    console.log("Task 2 completed");
}

// Using .then() to handle the Promise
// task1().then(task2);

async function main(){
    await task1()
    await task2()
}
main()