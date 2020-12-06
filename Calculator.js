const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user

const resultBody = document.querySelector('#card-body');
const resultBox = document.querySelector ('#result');
// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.

const firstNumber = document.querySelector('.first-number');
const operator = document.querySelector('#operator');
const secondNumber = document.querySelector('#second-number');
const result = document.querySelector('#result');
var firstNumberString = "";
var secondNumberString = "";
var operatorString = "";
var buttonClear = "";
var resultButton = "";
displayNumb = firstNumberString;

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

function clickNumber(event) {
  console.log(event.target.value);
  if(operatorString){
    secondNumberString += event.target.value
  }
  else{
    firstNumberString += event.target.value
  }
  document.getElementById("first-number").textContent = firstNumberString; 
  document.getElementById("second-number").textContent = secondNumberString; 
}
function clickOperator(event) {
  console.log(event.target.value);
  if(firstNumberString){
    operatorString = event.target.value;
  }
  document.getElementById("operator").textContent = operatorString;
    // CODE GOES HERE
}

function clickEqualButton(event) {
  console.log(event.target.value);
  var number1 = parseInt(firstNumberString);
  var number2 = parseInt(secondNumberString);
  if (operatorString == "-"){
    document.getElementById("result").textContent = number1 - number2;
  } else if (operatorString == "+"){
    document.getElementById("result").textContent = number1 + number2;
  } else if(operatorString == "x"){
    document.getElementById("result").textContent = number1 * number2;
  } else if(operatorString == "/"){
    document.getElementById("result").textContent = number1 / number2;
  } else if(operatorString == "^"){
    document.getElementById("result").textContent = Math.pow(number1, number2);
  } else {
    alert("this function cannot be completed");
  }
  }
    // CODE GOES HERE
function clickClearButton(event) {
  console.log(buttonClear);
  document.getElementById("first-number").textContent = "";
  firstNumberString = "";
  document.getElementById("operator").textContent="";
  document.getElementById("second-number").textContent = "";
  secondNumberString = "";
  operatorString = "";
  document.getElementById("result").textContent = "";
  

  // CODE GOES HERE
}

