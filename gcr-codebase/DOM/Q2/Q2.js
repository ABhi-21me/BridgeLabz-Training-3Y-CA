const text = document.getElementById("text");
const count = document.getElementById("count");
const reset = document.getElementById("reset");
const max = 100;

function updateCount() {
  const left = max - text.value.length;
  count.textContent = left + " characters left";
  count.className = left <= 0 ? "red" : left <= 20 ? "yellow" : "";
}

text.addEventListener("beforeinput", function (e) {
  if (text.value.length >= max && e.inputType === "insertText") {
    e.preventDefault();
  }
});

text.addEventListener("input", updateCount);

reset.addEventListener("click", function () {
  text.value = "";
  updateCount();
});

updateCount();
