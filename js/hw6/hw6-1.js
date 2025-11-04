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
    console.log(Math.round(inputP));
    resultString += `<p>Rounded to the nearest integer = ${Math.round(
      inputP
    )}</p>`;

    // B. Calc sqrt + round to int
    console.log(Math.round(Math.sqrt(inputP)));
    resultString += `<p>Square root rounded to integer = ${Math.round(
      Math.sqrt(inputP)
    )}</p>`;

    // C. Round to tenth
    console.log(Math.round(inputP * 10) / 10);
    resultString += `<p>Rounded to the nearest 10th position = ${
      Math.round(inputP * 10) / 10
    }</p>`;

    // D. Round to hundr
    console.log(Math.round(inputP * 100) / 100);
    resultString += `<p>Rounded to the nearest 100th position = ${
      Math.round(inputP * 100) / 100
    }</p>`;

    // E. Round to thou
    console.log(Math.round(inputP * 1000) / 1000);
    resultString += `<p>Rounded to the nearest 1000th position = ${
      Math.round(inputP * 1000) / 1000
    }</p>`;

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
