let number1;
let number2;
number1 = Math.floor(Math.random() * 10);
number2 = Math.floor(Math.random() * 10);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;
let answer = parseInt(number1 + number2);
let checkAnswer = document.querySelector("input[type=text]");
let value = parseInt(checkAnswer.value);
let btn = document.querySelector("input[type=button][value=check]");
btn.onclick = function() {
  if (value == answer) {
    alert("You are correct");
  } else {
    alert("You are incorrect, the answer is " + answer);
  }
  document.querySelector("input[type=text]").value = "";
  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";
  number1 = Math.floor(Math.random() * 10);
  number2 = Math.floor(Math.random() * 10);
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;
  answer = number1 + number2;
};
