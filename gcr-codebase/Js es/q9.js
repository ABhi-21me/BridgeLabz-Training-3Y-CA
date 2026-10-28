"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const obj = JSON.parse(rawData[i]);

        if (obj.user === undefined || obj.age === undefined) {
            throw new Error("Missing user or age key");
        }

        const age = Number(obj.age);
        if (Number.isNaN(age)) {
            throw new Error("Age is not a number");
        }

        obj.age = age;
        clean.push(obj);

        if (age < 18) {
            under18.push(obj);
        }
    } catch (err) {
        console.log(`Line ${i + 1}: ${err.message}`);
        // After an error, catch runs and the loop moves to the next entry.
    }
}

console.log("Clean data:", clean);
console.log("Under-18 users:", under18);
