let user = { name: "John", email: "john@mail.com", age: 21 };

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function showUser() {
    document.getElementById("details").textContent = JSON.stringify(user, null, 2);
}

showUser();

document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    showUser();
});
