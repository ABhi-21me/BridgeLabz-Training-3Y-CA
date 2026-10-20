let arr = [];
let result = [];

for (let i = 1; i <= 30; i++) {
    arr.push(i);
}

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 3 === 0 && num % 5 === 0) {
        result.push("FizzBuzz");
    } else if (num % 2 === 0) {
        result.push("Even");
    } else {
        result.push("Odd");
    }
}

console.log(result);