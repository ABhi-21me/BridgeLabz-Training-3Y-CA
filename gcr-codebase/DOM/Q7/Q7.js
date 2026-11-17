const area = document.getElementById("area");
const pos = document.getElementById("pos");

area.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  pos.textContent = "clientX: " + x + ", clientY: " + y;
});

area.addEventListener("dblclick", function (e) {
  const rect = area.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (e.clientX - rect.left) + "px";
  dot.style.top = (e.clientY - rect.top) + "px";
  area.appendChild(dot);
});
