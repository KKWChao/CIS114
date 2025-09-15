export default function validateInput(input, label) {
  if (input.trim() === "") {
    return `${label} is missing!<br>`;
  } else if (parseInt(input) < 0 || parseInt(input) > 100) {
    return `${label} is an invalid input`;
  } else if (isNaN(parseInt(input))) {
    return `${label} is a string!<br>`;
  }

  return "";
}
