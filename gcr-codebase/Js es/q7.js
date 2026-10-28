"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

for (const op of operations) {
    try {
        let result;

        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("Cannot divide by zero");
                result = num1 / num2;
                break;
            case "power":
                result = num1 ** num2;
                break;
            case "root":
                if (num1 < 0) throw new Error("Cannot find square root of a negative number");
                result = Math.sqrt(num1);
                break;
            case "subtract":
                result = num1 - num2;
                break;
            default:
                throw new InvalidOperationError("Operation not recognized");
        }

        console.log(`${op}: ${result}`);
    } catch (err) {
        console.log(`${op}: Error - ${err.message}`);
    }
}
