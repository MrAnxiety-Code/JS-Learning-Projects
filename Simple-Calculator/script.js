let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayValue = '';
let operator = [];
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
    operator.push(buttonOperator);
    displayValue = '';
    display.value = displayValue;
}
function calculate() {
    equation.push(displayValue);
    let result = '';
    for(var i = 0; i < equation.length; i++) {
        if(operator[i] === undefined) {
            result += equation[i];
            break;
        }
        else{
            result += equation[i] + operator[i];
        }
    }
    console.log(result);
    displayValue = eval(result);
    display.value = displayValue;
    equation = [];
    operator = [];
    firstTime = false;
}