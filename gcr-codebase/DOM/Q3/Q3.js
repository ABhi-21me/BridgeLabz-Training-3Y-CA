const steps = document.querySelectorAll(".step");
const next = document.getElementById("next");
const back = document.getElementById("back");
const result = document.getElementById("result");
let current = 0;

function showStep() {
  steps.forEach((step, i) => step.classList.toggle("active", i === current));
  back.style.display = current === 0 ? "none" : "inline";
  next.textContent = current === 2 ? "Submit" : "Next";
}

next.addEventListener("click", function () {
  const field = steps[current].querySelector("input");
  if (!field.checkValidity() || field.value.trim() === "") {
    field.reportValidity();
    return;
  }

  if (current < 2) {
    current++;
    showStep();
  } else {
    result.textContent = `Name: ${document.getElementById("name").value}, Email: ${document.getElementById("email").value}, Password: ${document.getElementById("password").value}`;
    document.getElementById("form").style.display = "none";
  }
});

back.addEventListener("click", function () {
  if (current > 0) current--;
  showStep();
});

showStep();
