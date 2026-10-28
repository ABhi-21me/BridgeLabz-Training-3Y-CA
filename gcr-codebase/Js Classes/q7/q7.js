document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errors = [];

    if (!/^.{5,}$/.test(username)) {
        errors.push("Username must be at least 5 characters.");
    }
    if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/.test(password)) {
        errors.push("Password must be 8+ characters and include uppercase, lowercase, number and special character.");
    }

    let msg = document.getElementById("msg");
    msg.style.color = errors.length ? "red" : "green";
    msg.innerHTML = errors.length ? errors.join("<br>") : "Login details are valid!";
});
