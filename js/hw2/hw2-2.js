function submitForm(event) {
  event.preventDefault();

  let input1 = document.getElementById("input_1").value;
  let input2 = document.getElementById("input_2").value;
  let input3 = document.getElementById("input_3").value;

  const inputs = [input1, input2, input3];

  let result = document.getElementById("result");

  let td_min = document.getElementById("min").innerHTML;
  let td_max = document.getElementById("min").innerHTML;
  let td_sum = document.getElementById("min").innerHTML;
  let td_mean = document.getElementById("min").innerHTML;
  let td_product = document.getElementById("min").innerHTML;

  if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3)) {
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
  } else {
    console.log("One of the inputs is a string");
  }
}
