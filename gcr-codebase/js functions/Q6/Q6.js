function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

function Professor(name, subject, experience) {
    Faculty.call(this, name, subject);
    this.experience = experience;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showExperience = function() {
    console.log("Experience: " + this.experience + " years");
};

let prof1 = new Professor("Rahul", "JavaScript", 10);

prof1.showName();
prof1.showSubject();
prof1.showExperience();
