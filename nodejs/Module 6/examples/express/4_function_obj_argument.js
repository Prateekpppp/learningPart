const addition = (request) => {
    let result = Number(request.num1) + Number(request.num2);
    result = String(result)
    return result
}

const deletion = (request) => {
    let result = Number(request.num1) - Number(request.num2);
    result = String(result)
    return result
}

const multiplication = (request) => {
    let result = Number(request.num1) * Number(request.num2);
    result = String(result)
    return result
}

const division = (request) => {
    let result = Number(request.num1) / Number(request.num2);
    result = String(result)
    return result
}

const request = { "num1": 20, "num2": 10 }

console.log(addition(request))
console.log(deletion(request))
console.log(multiplication(request))
console.log(division(request))
