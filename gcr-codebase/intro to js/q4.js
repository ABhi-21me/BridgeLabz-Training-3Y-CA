
// Q4 - Academic Performance Evaluator

let marks = [90, 85, 78, 88, 92];

let total = 0;
let failed = false;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        failed = true;
    }
}

let average = total / marks.length;
let percentage = (total / 500) * 100;

console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

if (failed || percentage < 50) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}

