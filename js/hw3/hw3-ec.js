let form = document.getElementById("learn-math");
let beginButton = document.getElementById("begin");
let userInput = document.getElementById("input");
let display = document.getElementById("display");
let check = document.getElementById("next-step");
let cont = document.getElementById("hidden-continue");
let userInputBox = document.getElementById("userInput");
let hint = document.getElementById("hint");

let correct = false;
let solution = 0;
let x;
let y;

// EVENT LISTENERS
beginButton.addEventListener("click", function () {
  learnMulti();
});

form.addEventListener("submit", function (event) {
  event.preventDefault(event);

  onSubmit();
});

// FUNCTIONS
function learnMulti() {
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);

  solution = x * y;

  display.innerHTML = `
  How much is ${x} times ${y}?
  `;
}

function onSubmit(event) {
  if (solution == parseInt(userInput.value)) {
    // learnMulti(event);
    correct = true;
    check.innerHTML = "Very good!";
    cont.innerHTML = `
    <p style="margin-bottom: 1em;">Continue?</p>
    <button id="user-no">No</button>  
    <button id="user-yes">Yes</button>
      `;

    // adding event listeners to buttons
    document.getElementById("user-no").addEventListener("click", handleNo);

    document.getElementById("user-yes").addEventListener("click", handleYes);

    hint.innerHTML = "";
  } else {
    check.innerHTML = `No. Please try again. <button id="hint">hint?</button>`;

    document
      .getElementById("hint")
      .addEventListener("click", () => generateHint(x, y));
  }
}

function handleNo() {
  check.innerHTML = "";
  display.innerHTML = "Thanks for playing, see you next time";
  cont.innerHTML = "";
  userInputBox.innerHTML = `<a href="./index.html" class="link-button link-button-effect">Go Back</a>`;
}

function handleYes() {
  check.innerHTML = "";
  learnMulti();
  cont.innerHTML = "";
}

function generateHint(a, b) {
  if (hint.innerHTML == "") {
    let string = "";
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < b; j++) {
        string += " * ";
      }
      string += "<br>";
    }
    hint.innerHTML = string;
  }
}

function resetForm() {
  userInput.value = "";
}

function buttonGen(text, func) {
  return `<button>${text}</button>`;
}
