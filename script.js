let inputNum1 = "";
let inputNum2 = "";
let inputOperator = "";
let currentInput = "";

//  EVENT LISTENERS
//  Digits (including decimal point)
document.querySelectorAll("div.calcDigit").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        currentInput += e.target.textContent;
        updateMainDisplay(currentInput);
    })
})
//  Operators
document.querySelectorAll("div.calcOperator").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const operator = e.target.textContent;
        if(currentInput){
            if(!inputNum1){
                inputNum1 = parseFloat(currentInput);
                currentInput = "";
                inputOperator = operator;
                updateMainDisplay("");
                updateHistoryDisplay()
            } else {
                inputNum2 = parseFloat(currentInput);
                currentInput = "";
                const result = operate(inputNum1, inputNum2, inputOperator)
                updateMainDisplay(result);
                updateHistoryDisplay();
                inputNum1 = result;
                inputOperator = operator;
            }
        } else {
            if(inputNum1){
                inputOperator = operator;
            }
        }
    })
})
// Equals
document.querySelector("div.calcEquals").addEventListener("click", (e) => {
    if(inputNum1 && inputOperator && currentInput){
        inputNum2 = parseFloat(currentInput);
        const result = operate(inputNum1, inputNum2, inputOperator);
        updateMainDisplay(result);
        updateHistoryDisplay();
        inputNum1 = result;
        inputNum2 = "";
        inputOperator = "";
        currentInput = "";
    }
})
//  All Clear
document.querySelector("div.calcAllClear").addEventListener("click", (e) => {
    initCalc();
})
//  Clear digit (basically acts as a delete key)
document.querySelector("div.calcClear").addEventListener("click", (e) => {
    if(currentInput){
        currentInput = currentInput.slice(0, -1);
        updateMainDisplay(currentInput);
    }
});

//  FUNCTIONS
function calcAdd(a, b){
    return a + b;
}
function calcSubtract(a, b){
    return a - b;
}
function calcMultiply(a, b){
    return Math.round((a * b) * 100 ) / 100;
}
function calcDivide(a, b){
    if(a === 0 || b === 0){
        alert("Naughty naughty, no dividing by 0")
        initCalc();
        return;
    }
    return Math.round((a / b) * 100 ) / 100;
}
function calcPercent(a, b){
    return Math.round(((a/100) * b) * 100) / 100
}
function operate(num1, num2, operator){
    let result = 0;
    switch(operator){
        case "+" :
            result = calcAdd(num1, num2);
            break;
        case "-" :
            result = calcSubtract(num1, num2);
            break;
        case "*" :
            result = calcMultiply(num1, num2);
            break;
        case "/" :
            result = calcDivide(num1, num2)
            break;
        case "%" :
            result = calcPercent(num1, num2);
            break;
        default :
            result = "80085";
    }
    return result;
}
function initCalc(){
    inputNum1 = "";
    inputNum2 = "";
    inputOperator = "";
    currentInput = "";
    updateMainDisplay("");
    updateHistoryDisplay();
}
function updateMainDisplay(str){
    const mainDisplay = document.querySelector("div#calcScreenMain");
    mainDisplay.textContent = str;
}
function updateHistoryDisplay(){    
    const historyDisplay = document.querySelector("div#calcScreenHistory");
    historyDisplay.textContent = `${inputNum1} ${inputOperator} ${inputNum2}`;
}