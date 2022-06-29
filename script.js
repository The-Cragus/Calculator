const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const power = document.querySelector('.power');
const remainder = document.querySelector('.remainder');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

let displayValue = 0;

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const pow = (a, b) => a ** b;

const rem = (a, b) => a % b;

const operate = (operator, a, b) => {
    if(operator === "+") {
        return add(a, b);
    }
    if(operator === "-") {
        return sub(a, b);
    }
    if(operator === "*") {
        return mult(a, b);
    }
    if(operator === "/") {
        return div(a, b);
    }
    if(operator === "**") {
        return pow(a, b);
    }
    if(operator === "%") {
        return rem(a, b);
    }
};