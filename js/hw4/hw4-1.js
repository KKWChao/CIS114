let stringArr = document.getElementById("arr");
let firstGroupProd = document.getElementById("4th-prod");
let firstGroupSum = document.getElementById("4th-sum");
let secondGroupProd = document.getElementById("3rd-prod");
let secondGroupSum = document.getElementById("3rd-sum");

// Arr of range {5 ... 25}
const numArr1 = Array.from({ length: 21 }, (_, i) => i + 5);
const numArr2 = Array.from({ length: 18 }, (_, i) => i + 3);

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

for (let i = 0; i < numArr1.length; i += 4) {
  prod *= numArr1[i];
  sum += numArr1[i];
  newArr.push(numArr1[i]);
}

// stringArr.innerHTML = forStringOutputBuilder(numArr, " ");

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
while (j < numArr2.length) {
  prod *= numArr2[j];
  sum += numArr2[j];
  newArr.push(numArr2[j]);
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
