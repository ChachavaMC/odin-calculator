let inputNum1 = "";
let inputNum2 = "";
let inputOperator = "";

//  Event Listeners
//  Digits (including decimal point)
document.querySelectorAll("div.calcDigit").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    })
})
//  Operators
document.querySelectorAll("div.calcOperator").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    })
})
// Equals
document.querySelector("div.calcEquals").addEventListener("click", (e) => {
    console.log(e.target.textContent);
})
//  All Clear
document.querySelector("div.calcAllClear", (e) => {
    console.log(e.target.textContent);
})
//  Clear digit (basically acts as a delete key)
document.querySelector("div#calcClear", (e) => {
    console.log(e.target.textContent);
})

function calcAdd(a, b){
    return a + b;
}
function calcSubtract(a, b){
    return a - b;
}
function calcMultiply(a, b){
    return a * b;
}
function calcDivide(a, b){
    return a / b;
}
function operate(num1, num2, operator){
    let result = 0;
    switch(operator){
        case "+" :
            return calcAdd(num1, num2);
            break;
        case "-" :
            return calcSubtract(num1, num2);
            break;
        case "*" :
            return calcMultiply(num1, num2);
            break;
        case "/" :
            return calcDivide(num1, num2)
            break;
        default :
            return "80085";
    }
}