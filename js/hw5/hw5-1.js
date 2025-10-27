let submit = document.getElementById("submit-button");
let reset = document.getElementById("reset-button");
let result = document.getElementById("result-box");
let form = document.getElementById("pt1-form");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let firstname = form.elements["firstname"].value;
  let lastname = form.elements["lastname"].value;
  let age = form.elements["age"].value;

  let cb_safari = form.elements["cb-safari"].checked;
  let cb_chrome = form.elements["cb-chrome"].checked;
  let cb_firefox = form.elements["cb-firefox"].checked;

  let movie_type = form.elements["select-movie"].value;

  let error = "";

  let browser = [cb_safari, cb_chrome, cb_firefox];

  error += validator(firstname, "First Name");
  error += validator(lastname, "Last Name");
  error += validator(age, "Age");
  error += validator(browser, "Browser");
  error += validator(movie_type, "Movie Type");
  if (!error) {
    result.innerHTML = `<p>Thanks, your data was submitted!</p>`;
  } else {
    result.innerHTML = `<p>${error}</p>`;
  }
});

reset.addEventListener("click", (event) => {
  event.preventDefault();

  form.elements["firstname"].value = "";
  form.elements["lastname"].value = "";

  for (const radio of form.elements["age"]) {
    radio.checked = false;
  }

  form.elements["cb-safari"].checked = false;
  form.elements["cb-chrome"].checked = false;
  form.elements["cb-firefox"].checked = false;

  form.elements["select-movie"].value = "";

  result.innerHTML = "";
});

function validator(value, type) {
  let error = "";

  if (type === "Browser") {
    let counter = 0;

    for (const check of value) {
      // for of since want values, for in will give indexes
      if (!check) counter++;
    }

    if (counter == 3) {
      error = `Missing Entry: ${type}<br>`;
    }
  } else {
    if (value === "") error = `Missing Entry: ${type}<br>`;
  }

  return error;
}
