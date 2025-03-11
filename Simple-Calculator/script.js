let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayValue = '';
let equation = [];
let firstTime = true;
function displayUpdate(value) {
    if(!firstTime) {
        displayValue = '';
        display.value = displayValue;
        firstTime = true;
    }
    displayValue += value;
    display.value = displayValue;
}
function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
    firstTime = true;
}
function nextNumber(buttonOperator) {
    equation.push(displayValue);
    equation.push(buttonOperator);
    displayValue = '';
    display.value = displayValue;
}
function calculate() {
    equation.push(displayValue);
    let result = '';
    for(var i = 0; i < equation.length; i++) {
        result += equation[i];
    }
    console.log(result);
    displayValue = eval(result);
    display.value = displayValue;
    equation = [];
    firstTime = false;
}