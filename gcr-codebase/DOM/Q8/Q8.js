const drop = document.getElementById("drop");
const options = document.getElementById("options");

drop.addEventListener("click", function (e) {
  e.stopPropagation();
  options.style.display = options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", function (e) {
  if (e.target.tagName === "DIV") {
    drop.textContent = e.target.textContent;
    options.style.display = "none";
  }
});

document.addEventListener("click", function () {
  options.style.display = "none";
}, true);
