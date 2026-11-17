const item = document.getElementById("item");
const add = document.getElementById("add");
const list = document.getElementById("list");
let editing = null;

add.addEventListener("click", function () {
  if (item.value.trim() === "") return;
  const li = document.createElement("li");
  li.innerHTML = `<span>${item.value.trim()}</span><button class="edit">Edit</button><button class="delete">Delete</button>`;
  list.appendChild(li);
  item.value = "";
});

list.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.classList.contains("delete")) {
    li.remove();
    if (editing === li) editing = null;
  }

  if (e.target.classList.contains("edit")) {
    if (editing && editing !== li) saveEdit();
    if (editing === li) return;
    const span = li.querySelector("span");
    const input = document.createElement("input");
    input.value = span.textContent;
    span.replaceWith(input);
    editing = li;
    input.focus();
  }
});

function saveEdit() {
  if (!editing) return;
  const input = editing.querySelector("input");
  if (input) {
    const span = document.createElement("span");
    span.textContent = input.value.trim() || "Untitled";
    input.replaceWith(span);
  }
  editing = null;
}

document.addEventListener("click", function (e) {
  if (editing && !editing.contains(e.target)) saveEdit();
});
