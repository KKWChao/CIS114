const data = [
  ["AL", "Alabama", "Montgomery", 5157699],
  ["AK", "Alaska", "Juneau", 740133],
  ["AZ", "Arizona", "Pheonix", 7582382],
  ["AR", "Arkansas", "Little Rock", 3088354],
  ["CA", "California", "Sacramento", 39431263],
  ["CO", "Colorado", "Denver", 5957493],
];

let dataState = "";

for (const item of data) {
  dataState += `${item[1]} `;
}

console.log(dataState);

let form = document.getElementById("pt2-form");
let submit = document.getElementById("submit-button");
let reset = document.getElementById("reset-button");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let result = document.getElementById("result-box");
  let user_input = form.elements["user-input"].value.toLowerCase();

  if (user_input === "") {
    result.innerHTML = `<p>Please Enter a State</p>`;
  } else if (user_input.length == 2) {
    bruteForceMatch(user_input, 0, result);
  } else {
    bruteForceMatch(user_input, 1, result);
  }
});

reset.addEventListener("click", (event) => {
  event.preventDefault();

  document.getElementById("result-box").innerHTML = "";
  form.elements["user-input"].value = "";
});

function returnState(arr) {
  return `
    <p>Thanks for your inquiry, here is the information you requested:</p><br>
    <p>State Abbr = ${arr[0]}</p><br>
    <p>State Name = ${arr[1]}</p><br>
    <p>Capital = ${arr[2]}</p><br>
    <p>Population = ${arr[3].toLocaleString()}</p><br>
    `;
}

function bruteForceMatch(input, version, result) {
  let found = false;

  for (const state of data) {
    if (state[version].toLocaleLowerCase() === input) {
      found = true;
      result.innerHTML = returnState(state);
    }
  }

  if (!found)
    result.innerHTML = `<p>Sorry, we do not have information about this state! We only have information about:</p><br><p>${dataState}</p>`;
}
