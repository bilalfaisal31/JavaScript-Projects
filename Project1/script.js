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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "*Username Field can't be empty");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "*Email Field can't be empty");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "*Password Field can't be empty");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "*Confirm Password Field can't be empty");
  } else {
    showSuccess(password2);
  }
});
