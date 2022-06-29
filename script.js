const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => a - b;


const multiply = (a, b) => a * b;


const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const remainder = (a, b) => a % b;

const operate = (operator, a, b) => {
    if(operator === "+") {
        return add(a, b);
    }
    if(operator === "-") {
        return subtract(a, b);
    }
    if(operator === "*") {
        return multiply(a, b);
    }
    if(operator === "/") {
        return divide(a, b);
    }
    if(operator === "**") {
        return power(a, b);
    }
    if(operator === "%") {
        return remainder(a, b);
    }
};