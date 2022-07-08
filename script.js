//Create variable to hold display value, create variable of display area and populate.
let displayValue = 0;
let firstNumber = 0;
// let solution = 0;
let savedOperator = "";
let displayArea = document.querySelector('.display');

// Update display with button clicked
// Sets a limit to numbers allowed in display (13);
// Changes what is rendered in display
// Clears 0 from preceding entered integers
let updateDisplay = (a) => {
    displayValue = displayArea.textContent;

    if(displayValue.length >= 13) {
        displayValue.split(' ');
        displayValue.join(' ');
    }
    if(displayValue.charAt(0) === "0") {
        return displayArea.textContent = a;
    } else {
        displayValue = displayArea.textContent += a;
    }
};

//Operator functions
const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const pow = (a, b) => a ** b;

const rem = (a, b) => a % b;

const operate = (operator, a, b) => {

    a = firstNumber;
    b = displayValue;

    if(savedOperator === addition) {
        return add(+a, +b);
    }
    if(savedOperator === subtraction) {
        return sub(+a, +b);
    }
    if(operator === multiplication) {
        return mult(+a, +b);
    }
    if(operator === division) {
        return div(+a, +b);
    }
    if(operator === power) {
        return pow(+a, +b);
    }
    if(operator === remainder) {
        return rem(+a, +b);
    }
};

//Event Listeners for Numbered Buttons
const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
updateDisplay(0);
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
updateDisplay(1);
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
updateDisplay(2);
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
updateDisplay(3);
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
updateDisplay(4);
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
updateDisplay(5);
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
updateDisplay(6);
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
updateDisplay(7);
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
updateDisplay(8);
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
updateDisplay(9);
});

//Event Listeners for operator, clear, and equal buttons
const addition = document.querySelector('.addition');
addition.addEventListener('click', () => {
    firstNumber = displayValue;
    displayArea.textContent = "";
    savedOperator = addition;
});

const subtraction = document.querySelector('.subtraction');
subtraction.addEventListener('click', () => {
    firstNumber = displayValue;
    displayArea.textContent = "";
    savedOperator = subtraction;
});

const multiplication = document.querySelector('.multiplication');
multiplication.addEventListener('click', () => {
    firstNumber = displayValue;
    displayArea.textContent = "";
});

const division = document.querySelector('.division');
division.addEventListener('click', () => {
    firstNumber = displayValue;
    displayArea.textContent = "";
});

const power = document.querySelector('.power');
power.addEventListener('click', () => {
    firstNumber = displayValue;
    displayArea.textContent = "";
});

const remainder = document.querySelector('.remainder');
remainder.addEventListener('click', () => {
    firstNumber = displayValue;
    displayArea.textContent = "";
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayArea.textContent = operate();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayArea.textContent = 0;
});
