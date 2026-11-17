const search = document.getElementById("search");
const rows = document.querySelectorAll("#rows tr");
const empty = document.getElementById("empty");

search.addEventListener("input", function () {
  const value = search.value.toLowerCase();
  let found = 0;

  rows.forEach(function (row) {
    const match = row.textContent.toLowerCase().includes(value);
    row.style.display = match ? "" : "none";
    if (match) found++;
  });

  empty.style.display = found === 0 ? "block" : "none";
});
