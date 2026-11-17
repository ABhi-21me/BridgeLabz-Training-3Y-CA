// Using arrow function
const user = {
    name: "Abhi",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Fix using normal function
const user2 = {
    name: "Abhi",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();
