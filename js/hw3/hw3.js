function validateInput(input, label) {
  if (input.trim() === "") {
    return `${label} is missing!<br>`;
  } else if (isNaN(parseInt(input))) {
    return `${label} is a string!<br>`;
  }

  return "";
}

function calcFinalAvg(e) {
  e.preventDefault();

  let hwAvg = document.getElementById("hwAvg").value;
  let particiaption = document.getElementById("participation").value;
  let midExam = document.getElementById("midterm").value;
  let finalExam = document.getElementById("final").value;

  let finalAvg = document.getElementById("hw-1-result");

  console.log(hwAvg.value);

  let sum = 0;
  let grade = "";

  sum +=
    parseInt(hwAvg) * 0.5 +
    parseInt(particiaption) * 0.1 +
    parseInt(midExam) * 0.2 +
    parseInt(finalExam) * 0.2;
  console.log(sum);

  switch (true) {
    case sum >= 90 && sum <= 100:
      grade = "A";
      console.log(grade);
      break;

    case sum >= 80 && sum < 90:
      grade = "B";
      console.log(grade);
      break;

    case sum >= 70 && sum < 80:
      grade = "C";
      console.log(grade);
      break;

    case sum >= 60 && sum < 70:
      grade = "D";
      console.log(grade);
      break;

    case sum >= 50 && sum < 60:
      grade = "F";
      console.log(grade);
      break;

    default:
      grade = "F";
      break;
  }

  if (!isNaN(sum)) {
    finalAvg.innerHTML = `
  ${sum}
  ${grade}
  `;
  } else {
    finalAvg.innerHTML = `Error`;
  }
}
