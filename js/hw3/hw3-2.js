function calcCommisions(event) {
  event.preventDefault();

  let totalAmountSold = document.getElementById("total-amount-sold");
  let totalWeeklyEarning = document.getElementById("total-weekly-earnings");

  let values = [20.99, 12.75, 9.95, 35.89];
  let amountSold = 0;
  let weeklyEarning = 0;

  for (let i = 1; i <= 4; i++) {
    let item = document.getElementById(`item${i}`);
    let quantity = document.getElementById(`qtyItem${i}`);
    let itemTotal = document.getElementById(`totalItem${i}`);

    let quantityVal = parseInt(item.value);
    let totalVal = parseFloat((item.value * values[i - 1]).toFixed(2));

    quantity.innerHTML = quantityVal;
    itemTotal.innerHTML = `$${totalVal}`;

    amountSold += quantityVal;
    weeklyEarning += totalVal;
  }

  totalAmountSold.innerHTML = `$${weeklyEarning.toFixed(2)}`;
  totalWeeklyEarning.innerHTML = `$${parseFloat(
    weeklyEarning * 0.09 + 250
  ).toFixed(2)}`;
}
