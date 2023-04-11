let input = document.getElementById('result');

function insertNumber(number) {
	input.value += number;
}

function insertOperator(operator) {
	input.value += operator;
}

function insertDecimal() {
	if (input.value.indexOf('.') === -1) {
		input.value += '.';
	}
}

function clearScreen() {
	input.value = '';
}

function backspace() {
	input.value = input.value.slice(0, -1);
}

function calculate() {
	try {
		input.value = eval(input.value);
	} catch (error) {
		input.value = 'Error';
	}
}
