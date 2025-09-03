function validateInput(input, label) {
  if (input.trim() === "") {
    return `${label} is missing!<br>`;
  } else if (isNaN(parseInt(input))) {
    return `${label} is a string!<br>`;
  }

  return "";
}

function submitForm(event) {
  event.preventDefault();

  let input1 = document.getElementById("input_1").value;
  let input2 = document.getElementById("input_2").value;
  let input3 = document.getElementById("input_3").value;

  const inputs = [parseInt(input1), parseInt(input2), parseInt(input3)];

  let td_min = document.getElementById("min");
  let td_max = document.getElementById("max");
  let td_sum = document.getElementById("sum");
  let td_mean = document.getElementById("mean");
  let td_product = document.getElementById("product");

  let table_result = document.getElementById("hw2-2-results-table");

  if (
    input1 !== "" &&
    !isNaN(input1) &&
    input2 !== "" &&
    !isNaN(input2) &&
    input3 !== "" &&
    !isNaN(input3)
  ) {
    let results = [];
    let min,
      max,
      sum = 0,
      mean = 0,
      product = 1;

    // Min and Max
    min = Math.min(...inputs);
    max = Math.max(...inputs);

    // Sum
    for (const i of inputs) {
      sum += Number(i);
    }

    // Mean
    mean = sum / inputs.length;

    // Product
    for (const i of inputs) {
      product *= Number(i);
    }

    results.push(min, max, sum, mean, product);

    // for (let i = 0; i < output.length; ++i) {
    //   output[i].innerHTML = results[i];
    // }

    console.log(parseInt(input1));

    table_result.innerHTML = `

          <tr>
            <th>Min</th>
            <th>Max</th>
            <th>Sum</th>
            <th>Mean</th>
            <th>Product</th>
          </tr>

          <tr id="results">
            <td id="min">${min}</td>
            <td id="max">${max}</td>
            <td id="sum">${sum}</td>
            <td id="mean">${mean.toPrecision(3)}</td>
            <td id="product">${product}</td>
          </tr>

    `;
  } else {
    let output = ``;

    output += validateInput(input1, "Input 1");
    output += validateInput(input2, "Input 2");
    output += validateInput(input3, "Input 3");

    table_result.innerHTML = output;
  }
}
