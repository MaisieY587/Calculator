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


let displayValue = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue.textContent === '0') {
            displayValue.textContent = button.textContent;
        } else {
            displayValue.textContent += button.textContent;
        }
    });
});