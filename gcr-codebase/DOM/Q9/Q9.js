const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const success = document.getElementById("success");

function checkForm() {
  let valid = true;

  document.getElementById("nameErr").textContent = "";
  document.getElementById("emailErr").textContent = "";
  document.getElementById("passErr").textContent = "";

  if (nameInput.value.trim() === "") {
    document.getElementById("nameErr").textContent = "Name is required";
    valid = false;
  }
  if (!emailInput.value.includes("@")) {
    document.getElementById("emailErr").textContent = "Enter a valid email";
    valid = false;
  }
  if (passInput.value.length < 6) {
    document.getElementById("passErr").textContent = "Password must be at least 6 characters";
    valid = false;
  }
  return valid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkForm()) {
    success.textContent = "Form Submitted Successfully";
    form.reset();
  }
});

[nameInput, emailInput, passInput].forEach(function (input) {
  input.addEventListener("input", function () {
    checkForm();
    success.textContent = "";
  });
});
