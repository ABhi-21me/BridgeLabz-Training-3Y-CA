
// Q8 - Employee Salary Projection

let salary = 30000;
let increment = 10;
let data = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * increment / 100;
    salary = Math.round(salary);

    data.push({
        Year: year,
        Salary: salary
    });
}

console.table(data);
