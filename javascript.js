const allClearButton = document.querySelector("#all-clear");
const clearLastButton = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".numberBtn");
const operatorButtons = document.querySelectorAll(".signBtn");
const decimalButton = document.querySelector(".decimal");
const equalButton = document.querySelector(".equal");
const equationState = document.querySelector(".equation");
const userInput = document.querySelector(".userInput");

// values
let currentInput = "";
let previousInput = "";
let operator = null;

/* calculations functions */
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => b !== 0 ? a / b : "Division by zero!";

/* functionality */

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentInput += button.textContent; 
        userInput.textContent = currentInput;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentInput === "" && previousInput !== "") {
            operator = button.textContent; 
            equationState.textContent = `${previousInput} ${operator}`;
            return;
        }
    
        if (currentInput !== "") {
            previousInput = currentInput;
            operator = button.textContent;
            currentInput = ""; 
            equationState.textContent = `${previousInput} ${operator}`;
            userInput.textContent = ""; 
        }
    });
  });
  

decimalButton.addEventListener("click", () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        userInput.textContent = currentInput; 
    }
});

equalButton.addEventListener("click", () => {
    if (previousInput === "" || currentInput === "" || operator === null) return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (operator) {
        case "+":
        result = addition(num1, num2);
        break;
        case "-":
        result = subtraction(num1, num2);
        break;
        case "*":
        result = multiply(num1, num2);
        break;
        case "/":
        result = division(num1, num2);
        break;
    }

    equationState.textContent = `${previousInput} ${operator} ${currentInput} =`;
    userInput.textContent = result; 
    previousInput = result; 
    currentInput = "";
    operator = null;
});

allClearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = null;
    userInput.textContent = "0";
    equationState.textContent = "";
});

clearLastButton.addEventListener("click", () => {
    if(currentInput !== ""){
        currentInput = currentInput.slice(0, -1);
        userInput.textContent = currentInput || ''
    }
});


/*
For keyboard support
document.addEventListener("keydown", function (event) {
    if (!isNaN(event.key)) {
        userInput.innerText = event.key
      console.log(`Number key pressed: ${event.key}`);
    } else if (['+', '-', '*', '/', 'Enter', 'Backspace'].includes(event.key)) {
        userInput.innerText += event.key
      console.log(`Special character pressed: ${event.key}`);
    }
  });
*/