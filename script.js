let output = document.getElementById("output");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");

let operator = null;
let operand1 = null;
let operand2 = null;

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

function operate(operator, operand1, operand2) {
  let result = null;

  switch (operator) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = subtract(operand1, operand2);
      break;
    case "*":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;
  }

  return result;
}

function updateOutput() {
  if (operand2 === null) {
    output.textContent = operand1;
  } else {
    output.textContent = operand2;
  }
}

function handleClear() {
  operator = null;
  operand1 = null;
  operand2 = null;

  updateOutput();
}

function handleNumberClick(event) {
  let number = event.target.textContent;

  if (operator === null) {
    if (operand1 === null) {
      operand1 = number;
    } else {
      operand1 += number;
    }

    output.textContent = operand1;
  } else {
    if (operand2 === null) {
      operand2 = number;
    } else {
      operand2 += number;
    }

    output.textContent = operand2;
  }
}

function handleOperatorClick(event) {
  let newOperator = event.target.textContent;

  if (operator === null) {
    operator = newOperator;
  } else {
    operand1 = operate(operator, parseFloat(operand1), parseFloat(operand2));
    operand2 = null;
    operator = newOperator;
    output.textContent = operand1;
  }
}

function handleEqualsClick() {
  if (operand1 !== null && operand2 !== null && operator !== null) {
    operand1 = operate(operator, parseFloat(operand1), parseFloat(operand2));
    operand2 = null;
    operator = null;
    updateOutput();
  }
}

clear.addEventListener("click", handleClear);

let numbers = document.querySelectorAll(".number");
numbers.forEach(function(number) {
  number.addEventListener("click", handleNumberClick);
});

let operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
  operator.addEventListener("click", handleOperatorClick);
});

equals.addEventListener("click", handleEqualsClick);
