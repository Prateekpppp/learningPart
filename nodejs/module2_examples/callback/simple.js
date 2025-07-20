//callback pattern
function step1(callback) {
    setTimeout(()=>{
        callback("step1 result")
    },2000) 
}

function step2(resultfromStep1) {
    console.log(resultfromStep1 + " task2 result") 
}

step1(step2);
