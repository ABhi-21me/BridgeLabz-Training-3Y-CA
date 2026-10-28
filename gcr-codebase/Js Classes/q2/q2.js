let form = document.getElementById("form");
let msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let fields = [
        { el: document.getElementById("name"), re: /^[A-Za-z]+$/, error: "Name should contain alphabets only." },
        { el: document.getElementById("email"), re: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, error: "Enter a valid email." },
        { el: document.getElementById("phone"), re: /^\d{10}$/, error: "Phone must be exactly 10 digits." },
        { el: document.getElementById("pass"), re: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, error: "Password needs an uppercase letter, number and special character." }
    ];

    let errors = [];
    fields.forEach(function(f) {
        if (f.re.test(f.el.value.trim())) {
            f.el.style.border = "2px solid green";
        } else {
            f.el.style.border = "2px solid red";
            errors.push(f.error);
        }
    });

    msg.style.color = errors.length ? "red" : "green";
    msg.innerHTML = errors.length ? errors.join("<br>") : "Registration details are valid!";
});
