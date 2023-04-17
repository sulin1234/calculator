var num1 = '';
var num2 = '';
var operator = '';
var result = '';

function display(num) {
  if (result != '') {
    clearResult();
  }
  if (operator == '') {
    num1 += num;
    document.getElementsByName('result')[0].value = num1;
  } else {
    num2 += num;
    document.getElementsByName('result')[0].value = num2;
  }
}

function calculate(op) {
  if (op == '=') {
    if (num2 == '') {
      result = num1;
    } else {
      result = eval(num1 + operator + num2);
    }
