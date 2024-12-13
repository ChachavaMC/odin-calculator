let inputNum1 = "";
let inputNum2 = "";
let inputOperator = "";

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