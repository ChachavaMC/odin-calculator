let inputNum1 = "";
let inputNum2 = "";
let inputOperator = "";
const mainDisplay = document.querySelector("div#calcScreenMain");
const historyDisplay = document.querySelector("div#calcScreenHistory");

//  Event Listeners
//  Digits (including decimal point)
document.querySelectorAll("div.calcDigit").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        if(mainDisplay.textContent.length <= 10){
            let newDisplay = mainDisplay.textContent + e.target.textContent;
            updateMainDisplay(newDisplay);
        }
    })
})
//  Operators
document.querySelectorAll("div.calcOperator").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const operator = e.target.textContent;
        if (!inputNum1){
            inputOperator = operator;
            inputNum1 = mainDisplay.textContent;
            updateMainDisplay("");
            updateHistoryDisplay();
        } else {
            //  There is something in inputNum1
            if(mainDisplay.textContent){
                // If inputNum1 is there and a new number has been typed in
                // assign the new number to inputNum2 and run the operate function
                inputNum2 = mainDisplay.textContent;
                updateHistoryDisplay();
                result = operate(inputNum1, inputNum2, inputOperator);
                updateMainDisplay(result);
            } else {
                inputOperator = operator;
                updateHistoryDisplay();
            }
        }
    })
})
// Equals
document.querySelector("div.calcEquals").addEventListener("click", (e) => {
    console.log(e.target.textContent);
})
//  All Clear
document.querySelector("div.calcAllClear").addEventListener("click", (e) => {
    console.log(e.target.textContent);
    initCalc();
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

function initCalc(){
    inputNum1 = "";
    inputNum2 = "";
    inputOperator = "";
    updateMainDisplay("");
    updateHistoryDisplay();
}
function updateMainDisplay(str){
    mainDisplay.textContent = str;
}
function updateHistoryDisplay(){
    historyDisplay.textContent = `${inputNum1} ${inputOperator} ${inputNum2}`
}