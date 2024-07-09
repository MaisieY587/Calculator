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

let first = '';
let operator = '';
let second = '';

let solution;


let displayValue = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.function');
let equalButton = document.querySelector('.equals');
let clearButton = document.querySelector('.clear');


let result;
function operate(first, operator, second) {
    first = Number(first); 
    second = Number(second); 

    switch (operator) {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            result = divide(first, second);
            break;
        default:
            result = 'Error';
    }
    displayValue.textContent = result;
}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!operator) {
            if (displayValue.textContent === '0') {
                first = button.textContent;
                displayValue.textContent = first;
            } else {
                first += button.textContent;
                displayValue.textContent = first
            }
        }
        if (operator) {
            second += button.textContent;
            displayValue.textContent = second;
        }
    });
});

operatorButtons.forEach(button => { 
    button.addEventListener('click', () => {
        if (first && !second) {
            operator = button.textContent; 
        }
    });
});

equalButton.addEventListener('click', () => { 
    if (first && operator && second) { 
        operate(first, operator, second);
        first = result;
        operator = '';
        second = '';
    }
});

clearButton.addEventListener('click', () => { 
    first = ''; 
    operator = ''; 
    second = ''; 
    displayValue.textContent = '0'; 
});

