let table_holder = document.getElementById("table-holder");

for (let i = 5; i < 10; i++) {
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
