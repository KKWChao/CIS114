function getCookie(cName) {
  var name = cName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var fullname = getCookie("fullname");
  var username = getCookie("username");

  if (fullname != "") {
    document.getElementById("result-container").innerHTML =
      "Welcome back " + fullname + "<br>" + "Your username is: " + username;
    document.getElementById("pt2-form").style.display = "none";
  } else {
    document.getElementById("pt2-form").style.display = "block";
    document.getElementById("result-container").style.display = "none";

    document
      .getElementById("submit-button")
      .addEventListener("click", (event) => {
        event.preventDefault();

        createCookie();
      });

    function createCookie() {
      var cValue = document.getElementById("user-name").value;
      var cValueFullName = document.getElementById("user-full-name").value;
      var cName = "username";
      var cNameFull = "fullname";
      var expDays = 100;

      // var d = new Date();
      // d.setTime(d.getTime() + expDays * 24 * 60 * 60 * 1000);

      // var expire = "expires=" + d.toUTCString();
      // + expire
      document.cookie = cName + "=" + cValue + ";" + ";path=/";
      document.cookie = cNameFull + "=" + cValueFullName + ";" + ";path=/";
    }
  }
}

window.checkCookie = checkCookie;
