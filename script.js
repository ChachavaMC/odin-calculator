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

let inputNum1 = "";
let inputNum2 = "";
let inputOperator = "";

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
//  Add event listeners to all the buttons
document.querySelectorAll("div.calcDigit").forEach((item) => {
    item.addEventListener("click", (e) => {
        updateMainDisplay(e.target.textContent)
    })
});
document.querySelector("div.calcAllClear").addEventListener("click", initCalc)

document.querySelectorAll("div.calcOperator").forEach((item) => {
    item.addEventListener("click", (e) => {
        const screenDisplay = document.querySelector("div#calcScreenMain").textContent;
        inputOperator = e.target.textContent;
        if(!inputNum1){
            inputNum1 = screenDisplay;
        }
        updateScreenHistory(inputNum1, inputNum2, inputOperator)
        updateMainDisplay();
    })
})

function updateMainDisplay(str){
    const display = document.querySelector("div#calcScreenMain");
    if(str && display.textContent.length >= 10){
        return
    }
    if(str){
        display.textContent += str;
        return
    }
    display.textContent = "";
}
function updateScreenHistory(){
    const historyDisplay = document.querySelector("div#calcScreenHistory");
    historyDisplay.textContent = `${inputNum1} ${inputOperator} ${inputNum2}`;
}

function initCalc(){
    inputNum1 = "";
    inputNum2 = "";
    inputOperator = "";
    updateMainDisplay();
    updateScreenHistory()
}
