function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function runCalculator() {
    let a = 0, b = 0, operator = null;
    const calculator = document.querySelector('#calculator');
    const display = document.querySelector('#display')
    const allButtons = document.querySelectorAll("btn");
    allButtons.forEach((button) => {
        button.addEventListener('click', () => {
            input = button.textContent;
            if(a === 0 && !isNaN(input)) {
                a += input;
            } else if (a != 0 && isNaN(input)) {
                operator = input;
            } else if (a != 0 && !isNaN(input) && b === 0) {
                b += input;
            } else if (a != 0 && isNaN(input) && b != 0) {
                display.textContent = operate(a, b, input);
            }
        })
    })
}

function operate(a, b, op) {
    switch(op) {
        case '+':
            add(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '/':
            divide(a,b);
            break;
    }
}

