"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14",
    null, undefined];

const valid = [];
const invalid = [];

for (let i = 0; i < apiData.length; i++) {
    const item = apiData[i];
    const num = Number(item);
    const bool = Boolean(item);
    const str = String(item);

    console.log(`Value: ${str} | Number: ${num} | Boolean: ${bool}`);

    // These values don't give useful numeric data
    if (Number.isNaN(num) || (typeof item === "string" && item.trim() === "")) {
        invalid.push(item);
        console.log("  -> Invalid number");
    } else {
        valid.push(num);
    }
}

console.log("\nValid numbers:", valid);
console.log("Invalid values:", invalid);
