function task1() {
    console.log("1. Start of the script");
 
 setTimeout(function timoutCallback(){
     console.log("2. Inside setTimeout - Executes after the delay");
 }, 1);
 
 const promise = new Promise(function promiseCallback(resolve, reject){
   console.log("3. Inside promise call back")
   resolve(" Response from promise")
 })
 promise.then(function promiseResolveHandler(result){
   console.log("4. Inside promise .then call back")
 })
 
 console.log("6. End of the script");
 }
 task1()
 

/*
🔹 Call Stack runs first.
🔹 Microtasks (Promises) execute before timers and I/O.
🔹 Task Queue (setTimeout) runs after microtasks.
*/