class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

let employees = [
    new Employee(1, "Aman", "IT", 35000),
    new Employee(2, "Riya", "HR", 30000),
    new Employee(3, "Karan", "Sales", 28000),
    new Employee(4, "Neha", "IT", 40000),
    new Employee(5, "Rohit", "Support", 25000)
];

employees[0].applyBonus(10);

employees.forEach(function(emp) {
    console.log(emp.name + " annual salary: Rs. " + emp.getAnnualSalary());
});

let total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total annual payout: Rs. " + total);
