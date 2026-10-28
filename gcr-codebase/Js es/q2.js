"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const emp of employees) {
    try {
        if (!emp.name || emp.salary === undefined || emp.years === undefined) {
            throw new Error("Employee details are missing");
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Salary or years is not a number");
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        console.log(`${emp.name}: Salary = ₹${salary}, Experience = ${years} years, Bonus = ₹${bonus}`);
    } catch (err) {
        console.log(`Error for employee: ${err.message}`);
    }
}
