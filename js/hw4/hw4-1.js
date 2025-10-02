let stringArr = document.getElementById("arr");
let firstGroupProd = document.getElementById("4th-prod");
let firstGroupSum = document.getElementById("4th-sum");
let secondGroupProd = document.getElementById("3rd-prod");
let secondGroupSum = document.getElementById("3rd-sum");

// Arr of range {5 ... 25}
const numArr = Array.from({ length: 21 }, (_, i) => i + 5);

function forStringOutputBuilder(arr, operator, result) {
  let string = result != null ? "The result of " : "";

  for (let i = 0; i < arr.length; i++) {
    if (i != 0) string += ` ${operator} `;
    string += arr[i];
  }

  if (result != null) string += ` is ${result}`;

  return string;
}

let prod = 1;
let sum = 0;

let newArr = [];

for (let i = 0; i < numArr.length; i += 4) {
  prod *= numArr[i];
  sum += numArr[i];
  newArr.push(numArr[i]);
}

stringArr.innerHTML = forStringOutputBuilder(numArr, " ");

firstGroupProd.innerHTML = forStringOutputBuilder(
  newArr,
  "*",
  prod.toLocaleString()
);
firstGroupSum.innerHTML = forStringOutputBuilder(
  newArr,
  "+",
  sum.toLocaleString()
);

prod = 1;
sum = 0;

newArr = [];

let j = 0;
while (j < numArr.length) {
  prod *= numArr[j];
  sum += numArr[j];
  newArr.push(numArr[j]);
  j += 3;
}

secondGroupProd.innerHTML = forStringOutputBuilder(
  newArr,
  "*",
  prod.toLocaleString()
);
secondGroupSum.innerHTML = forStringOutputBuilder(
  newArr,
  "+",
  sum.toLocaleString()
);
