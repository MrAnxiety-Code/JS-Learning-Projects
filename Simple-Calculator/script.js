let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayValue = '';
let operator = [];
let equation = [];
function displayUpdate(value) {
    displayValue += value;
    display.value = displayValue;
}
function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
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
}