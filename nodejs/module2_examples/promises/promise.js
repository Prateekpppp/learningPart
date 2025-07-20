function vikram() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 2000);     
    });
}

function abdul(money) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("buy saree to mom");
            const balance = money - 2
            resolve(balance)
        },5000)
    })
}

function ramesh(money){
    console.log("finally i got my money from abdul", money)
}

// Using .then() to handle the Promise

vikram().then(abdul).then(ramesh);