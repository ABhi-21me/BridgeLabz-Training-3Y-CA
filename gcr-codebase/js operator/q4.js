let arr = [];

for (let i = 0; i < 8; i++) {
    arr.push(Math.floor(Math.random() * 71) + 30);
}

let highest = Math.max(...arr);
let lowest = Math.min(...arr);

let total = arr.reduce(function(sum, score) {
    return sum + score;
}, 0);

let avg = total / arr.length;

let passed = arr.filter(function(score) {
    return score >= 50;
});

console.log(`Scores: ${arr}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${avg.toFixed(2)}`);
console.log(`Students Passed: ${passed.length}`);