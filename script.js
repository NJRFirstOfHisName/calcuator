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
    let memory = {
        a : "0",
        b: "",
        input: "",
        op: ""
    }
    const calculator = document.querySelector('#calculator');
    const display = document.querySelector('#display')
    const allButtons = document.querySelectorAll("div.btn");
    allButtons.forEach((button) => {
        button.addEventListener('click', () => {
            memory.input = button.textContent;
            if (button.className === "numBtn btn") {
                memory = digitPress(memory);
            } else if (button.className === "opBtn btn") {
                memory = operatorPress(memory);
            } else if (button.className === "eqBtn btn") {
                memory = equalsPress(memory); 
            } else if (button.className === "clrBtn btn") {
                memory = clearPress(memory);
            } else {
                console.log("Error with button listener")
            }
        })
    })
}

function digitPress(memory) {
    if (memory.a === "0"){
        memory.a = memory.input;
        display.textContent = memory.a;
    } else if (memory.op === "") {
        memory.a += memory.input;
        display.textContent = memory.a;
    } else {
        if (memory.b === "0") {
            memory.b = memory.input;
        } else {
            memory.b += memory.input;
        }
        display.textContent = memory.b;
    }
    return memory;
}

function operatorPress(memory) {
    if (memory.a === "0") {
        return memory;
    } else if (memory.b === "0") {
        memory.op = memory.input;
    } else {
        a = parseInt(memory.a);
        b = parseInt(memory.b);
        switch(memory.op) {
            case "+":
                memory.a = add(a,b);
                break;
            case "-":
                memory.a = subtract(a,b);
                break;
            case "*":
                memory.a = multiply(a,b);
                break;
            case "/":
                memory.a = divide(a,b);
                break;
        }
        display.textContent = memory.a;
        memory.b = "0";
        memory.op = memory.input;
    }
    return memory;
}

function equalsPress(memory) {
    if (memory.a === "0" || memory.op === "" || memory.b === "") {
        return memory;
    } else {
        memory.input = memory.op;
        memory = operatorPress(memory);
        memory.op = "";
        memory.b = "";
        return memory;
    }
}

function clearPress(memory) {
    memory = {
        a : "0",
        b: "",
        input: "",
        op: ""
    }
    display.textContent = "0";
    return memory;
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

runCalculator();