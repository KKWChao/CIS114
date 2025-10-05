let table_holder = document.getElementById("table-holder");
let start = document.getElementById("start");
let end = document.getElementById("end");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

window.onload = function () {
  generateTables(5, 9);
};

submit.addEventListener("click", (event) => {
  onSubmit(event);
});

reset.addEventListener("click", (event) => {
  onReset(event);
});

function generateTables(start, end) {
  for (let i = start; i < end + 1; i++) {
    let tbString = "";

    for (let j = 1; j < 10; j++) {
      let rowString = "";
      let res = j * i;
      rowString = `
  <tr class=${j % 2 == 0 ? "white" : "grey"}>
    <td>${j}</td>
    <td>${i}</td>
    <td>${res}</td>
  </tr>
  `;
      tbString += rowString;
    }

    let tableBody = `
        <table class="w-full">
        <caption>${i} Multipliction Table</caption>
        <thead>
          <tr class="red">
            <th>Number</th>
            <th>Multiplier</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody id="table-body-${i}">${tbString}</tbody>
      </table>
      `;

    table_holder.innerHTML += tableBody;
  }
}

function onSubmit(event) {
  event.preventDefault();
  table_holder.innerHTML = "";

  generateTables(parseInt(start.value), parseInt(end.value));
}

function onReset(event) {
  event.preventDefault();
  start.value = "";
  end.value = "";

  table_holder.innerHTML = "";
  generateTables(5, 9);
}
