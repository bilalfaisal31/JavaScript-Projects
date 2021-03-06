let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let form = document.querySelector("form");

function showError(input, message) {
  const formPorion = input.parentElement;
  formPorion.className = "formportion error";
  const msg = formPorion.querySelector("span");
  msg.innerText = message;
}
function showSuccess(input) {
  const formPorion = input.parentElement;
  formPorion.className = "formportion success";
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${upper(input.id)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}
function upper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
