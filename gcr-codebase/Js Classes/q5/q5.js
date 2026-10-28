document.getElementById("bookForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = Number(document.getElementById("seats").value);
    let msg = document.getElementById("msg");

    if (!/^[A-Za-z ]+$/.test(name)) {
        msg.style.color = "red";
        msg.textContent = "Name should contain alphabets only.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.style.color = "red";
        msg.textContent = "Please enter a valid email.";
    } else if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        msg.style.color = "red";
        msg.textContent = "Seats must be between 1 and 10.";
    } else {
        let booking = { name: name, email: email, seats: seats };
        msg.style.color = "green";
        msg.textContent = "Ticket booked! " + JSON.stringify(booking);
    }
});
