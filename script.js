function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let first;
let operator;
let second;

function operate(first, operator, second) {
    if (operator === '+') {
        add(first, second);
    }
    if (operator === '-') {
        subtract(first, second);
    }
    if (operator === '*') {
        multiply(first, second);
    }
    if (operator === '/') {
        divide(first, second);
    }
}