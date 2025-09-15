function validateInput(input, label) {
  if (input.trim() === "") {
    return `${label} is missing!<br>`;
  } else if (parseInt(input) < 0 || parseInt(input) > 100) {
    return `${label} is an invalid number!<br>(Input must be between 0 - 100)<br>`;
  } else if (isNaN(parseInt(input))) {
    return `${label} must be a number!<br>`;
  }

  return "";
}

function calcFinalAvg(e) {
  e.preventDefault();

  let resultArr = [
    {
      name: "Homework Average",
      value: document.getElementById("hwAvg").value,
      ratio: 0.5,
    },
    {
      name: "Participation",
      value: document.getElementById("participation").value,
      ratio: 0.1,
    },
    {
      name: "Midterm Exam",
      value: document.getElementById("midterm").value,
      ratio: 0.2,
    },
    {
      name: "Final Exam",
      value: document.getElementById("final").value,
      ratio: 0.2,
    },
  ];
  let finalAvg = document.getElementById("hw1-result");
  let error = "";
  let sum = 0;
  let grade = "";

  for (let item of resultArr) {
    error += validateInput(item.value, item.name);

    if (error === "") {
      sum += parseInt(item.value) * item.ratio;
    }
  }

  switch (true) {
    case sum >= 90 && sum <= 100:
      grade = "A";
      break;

    case sum >= 80 && sum < 90:
      grade = "B";
      break;

    case sum >= 70 && sum < 80:
      grade = "C";
      break;

    case sum >= 60 && sum < 70:
      grade = "D";
      break;

    case sum >= 50 && sum < 60:
      grade = "F";
      break;

    default:
      grade = "F";
  }

  if (!isNaN(sum) && error === "") {
    finalAvg.innerHTML = `
    <p>Grade: <span class="result-output">${grade}</span><br>
  Percentage: <span class="result-output">${sum.toFixed(0)}</span><br>
  </p>

  `;
  } else {
    finalAvg.innerHTML = `Error: Input Error!<br><br>${error}`;
  }
}
