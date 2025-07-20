const addition = (num1, num2) => {
    let result = Number(num1) + Number(num2);
    result = String(result)
    return result
}

const subtraction = (num1, num2) => {
    let result = Number(num1) - Number(num2);
    result = String(result)
    return result
}

const multiplication = (num1, num2) => {
    let result = Number(num1) * Number(num2);
    result = String(result)
    return result
}

const division = (num1, num2) => {
    let result = Number(num1) / Number(num2);
    result = String(result)
    return result
}

const num1 = "20"
const num2 = "10"

console.log(addition(num1,num2))
console.log(subtraction(num1,num2))
console.log(multiplication(num1,num2))
console.log(division(num1,num2))
