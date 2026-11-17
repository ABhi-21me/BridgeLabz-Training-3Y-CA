const buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const theme = btn.getAttribute("data-value");
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-current-theme", theme);
  });
});
