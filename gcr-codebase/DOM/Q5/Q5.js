const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const box = document.getElementById("box");
const big = document.getElementById("big");

gallery.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    big.src = e.target.src;
    modal.style.display = "flex";
  }
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
});

box.addEventListener("click", function (e) {
  e.stopPropagation();
});
