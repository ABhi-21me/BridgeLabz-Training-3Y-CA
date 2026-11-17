class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return this.name + " is working in " + this.department;
  }
}

class Manager extends Employee {
  work() {
    return this.name + " is managing the " + this.department + " department";
  }
}

let emp = new Employee("Aman", "Sales");
let mgr = new Manager("Riya", "IT");

let people = [emp, mgr];

people.forEach(person => {
  console.log(person.work());
});
