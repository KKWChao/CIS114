let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let result = document.getElementById("result-box");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let form = document.getElementById("pt1-form");
  let input = form.elements["user-input"];

  let resultString = `<p>You typed the number: ${input.value}</p><br>`;

  // REGEX
  const inputRegExp = new RegExp("\\d\\.\\d{4}");

  // Valid number check
  let inputP = Number(input.value);

  if (inputP && input.value.match(inputRegExp)) {
    // A. Round the fp to nearest int
    resultString += `<p>Rounded to the nearest integer = ${Math.round(
      inputP
    )}</p>`;

    // B. Calc sqrt + round to int
    resultString += `<p>Square root rounded to integer = ${Math.round(
      Math.sqrt(inputP)
    )}</p>`;

    // C. Round to tenth
    resultString += `<p>Rounded to the nearest 10th position = ${inputP.toFixed(
      1
    )}</p>`;

    // D. Round to hundr
    resultString += `<p>Rounded to the nearest 100th position = ${inputP.toFixed(
      2
    )}</p>`;

    // E. Round to thou
    resultString += `<p>Rounded to the nearest 1000th position = ${inputP.toFixed(
      3
    )}</p>`;

    result.innerHTML = resultString;
  } else {
    console.log("error");
    result.innerHTML =
      "Invalid Input: Please enter a number that has at least 4 decimals";
  }
});

reset.addEventListener("click", (e) => {
  let form = document.getElementById("pt1-form");
  let input = form.elements["user-input"];
  e.preventDefault();

  input.value = "";
  result.innerHTML = "";
});
