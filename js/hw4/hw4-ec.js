let submit = document.getElementById("submit-button");
let reset = document.getElementById("reset-button");
let user_input = document.getElementById("user-input");
let result = document.getElementById("result-box");

submit.addEventListener("click", (event) => {
  onSubmit(event);
});

function onSubmit(event) {
  event.preventDefault();

  if (validateInput(user_input) == 0) {
    result.innerHTML = generatePattern(parseInt(user_input.value));
  } else {
    result.innerHTML = "The input value must be between (2 - 10)";
  }
}

reset.addEventListener("click", (event) => {
  user_input.value = "";
  result.innerHTML = "";
});

// validate input
function validateInput(input) {
  let check = parseInt(input.value);

  return check > 2 && check < 10 && !isNaN(check) ? 0 : 1;
}

// generating pattern
function generatePattern(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i == 0 || i == num - 1 || j == 0 || j == num - 1) {
        str += " * ";
      } else {
        str += "   ";
      }
    }
    str += "<br>";
  }

  return str;
}
