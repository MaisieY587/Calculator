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

let solution;

function operate(first, operator, second) {
    if (operator === '+') {
        solution.textContent = add(first, second);
        displayValue.textContent = solution;
    }
    if (operator === '-') {
        solution.textContent = subtract(first, second);
        displayValue.textContent = solution;
    }
    if (operator === '*') {
        solution.textContent =  multiply(first, second);
        displayValue.textContent = solution;
    }
    if (operator === '/') {
        solution.textContent =  divide(first, second);
        displayValue.textContent = solution;
    }
}

let multiplyBtn = document.querySelector('.multiply');
let addBtn = document.querySelector('.add');
let subtractBtn = document.querySelector('.subtract');
let divideBtn = document.querySelector('.divide');

multiplyBtn.addEventListener('click', () => {
    operator.textContent = '*'
});

addBtn.addEventListener('click', () => {
    operator.textContent = '+'
});

subtractBtn.addEventListener('click', () => {
    operator.textContent = '-'
});

divideBtn.addEventListener('click', () => {
    operator.textContent = '/'
});


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

