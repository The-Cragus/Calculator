//Create variable to hold display value, create variable of display area and populate.
let displayValue = "0";
let displayArea = document.querySelector('.display');
displayArea.textContent = displayValue;

// Update display with button clicked
// Changes what is rendered in display
// Clears 0 from preceding entered integers
let updateDisplay = (a) => {
displayValue = displayArea.textContent;
    if(displayValue.charAt(0) === "0") {
        return displayArea.textContent = a;
    } else {
        displayValue = displayArea.textContent += a;
    }
};

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

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const power = document.querySelector('.power');
const remainder = document.querySelector('.remainder');
const equals = document.querySelector('.equals');

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    return displayArea.innerText = 0;
});

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const pow = (a, b) => a ** b;

const rem = (a, b) => a % b;

const operate = (a, operator, b) => {
    if(operator === addition) {
        return add(a, b);
    }
    if(operator === subtraction) {
        return sub(a, b);
    }
    if(operator === multiplication) {
        return mult(a, b);
    }
    if(operator === division) {
        return div(a, b);
    }
    if(operator === power) {
        return pow(a, b);
    }
    if(operator === remainder) {
        return rem(a, b);
    }
};