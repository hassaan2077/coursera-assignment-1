let currentInput = "";
let currentOperator = "";
let result = 0;

function updateDisplay() {
    document.getElementById("result").value = currentInput;
}

function appendNumber(number) {
    if (currentInput === "0" || currentInput === "-0") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === "") {
        return;
    }

    if (currentOperator !== "") {
        calculateResult();
    }

    currentOperator = operator;
    currentInput += currentOperator;
    updateDisplay();
}

function calculateResult() {
    if (currentInput === "") {
        return;
    }

    try {
        result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
        currentOperator = "";
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    result = 0;
    updateDisplay();
}

// Initialize the display
updateDisplay();
