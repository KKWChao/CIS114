import validateInput from "../utils/validateInput.js";

const form = document.getElementById("commisions-form");
form.addEventListener("submit", function (event) {
  calcCommisions(event);
});

function calcCommisions(event) {
  event.preventDefault();

  let totalAmountSold = document.getElementById("total-amount-sold");
  let totalWeeklyEarning = document.getElementById("total-weekly-earnings");

  let values = [20.99, 12.75, 9.95, 35.89];
  let amountSold = 0;
  let weeklyEarning = 0;

  let qtArr = new Array(4);
  let totalArr = new Array(4);

  let error = "";

  // loop to calc values and input to arrays
  for (let i = 1; i <= 4; i++) {
    let userInput = document.getElementById(`item${i}`).value;
    error += validateInput(userInput, `Item ${i}`);

    if (error === "") {
      qtArr[i - 1] = parseInt(userInput);
      totalArr[i - 1] = parseFloat((userInput * values[i - 1]).toFixed(2));

      amountSold += qtArr[i - 1];
      weeklyEarning += totalArr[i - 1];
    }
  }

  if (error === "") {
    for (let i = 1; i <= 4; i++) {
      let quantity = document.getElementById(`qtyItem${i}`);
      let itemTotal = document.getElementById(`totalItem${i}`);

      quantity.innerHTML = qtArr[i - 1];
      itemTotal.innerHTML = `$${totalArr[i - 1]}`;
    }

    totalAmountSold.innerHTML = `$${weeklyEarning.toFixed(2)}`;
    totalWeeklyEarning.innerHTML = `$${parseFloat(
      weeklyEarning * 0.09 + 250
    ).toFixed(2)}`;
  } else {
    let errorBox = document.getElementById("error-box");

    errorBox.innerHTML = error;
  }
}
