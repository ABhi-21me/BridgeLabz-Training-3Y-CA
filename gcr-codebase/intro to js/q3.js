
// Q3 - Monthly Expense Tracker

let expenses = [
    { category: "Food", amount: 3000 },
    { category: "Travel", amount: 1000 },
    { category: "Rent", amount: 5000 },
    { category: "Bills", amount: 800 },
    { category: "Leisure", amount: 1200 }
];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}

let average = total / expenses.length;
let tax = total * 0.10;
total += tax;

console.log("Total Expenses: ₹" + (total - tax).toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + total.toFixed(2));
