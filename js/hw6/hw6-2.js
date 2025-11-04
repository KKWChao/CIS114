let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let result = document.getElementById("result-box");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let form = document.getElementById("pt2-form");
  let inputTxt = form.elements["user-text-area"];
  let inputCh = form.elements["user-char"];

  let count = 0;

  if (inputCh.value.length > 0 && inputTxt.value) {
    for (const char of inputTxt.value) {
      if (char.toLowerCase() == inputCh.value.toLowerCase()) {
        count++;
      }
    }

    if (count === 0) {
      window.open(
        `./popup.html?char=${inputCh.value}`,
        "ErrorWindow",
        "width=500, height=400"
      );
      result.innerHTML = "See Popup";
    } else {
      result.innerHTML = `<p>The letter "${inputCh.value.toUpperCase()}" or "${inputCh.value.toLowerCase()}" appears ${count} times in your text.</p>`;
    }
  } else {
    if (!inputTxt.value) {
      result.innerHTML += "Error: Missing User Text<br>";
    }

    if (!inputCh.value) {
      result.innerHTML += "Error: Missing Search Character<br>";
    }
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault();

  let form = document.getElementById("pt2-form");
  form.elements["user-text-area"].value = "";
  form.elements["user-char"].value = "";
  result.innerHTML = "";
});
