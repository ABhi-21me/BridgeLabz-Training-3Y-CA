"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const tx of transactions) {
    try {
        
        if (tx === null) {
            throw new Error("NullEntryError: transaction is null");
        }
        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error("MissingDataError: id or amount is missing");
        }
        if (tx.amount < 0) {
            throw new Error("NegativeAmountError: amount cannot be negative");
        }

        valid.push(tx);
        console.log(`Transaction ${tx.id} is valid`);
    } catch (err) {
        invalid.push({ transaction: tx, error: err.message });
        console.log("Invalid transaction:", err.message);
    }
}

console.log("\nSuccessful transactions:", valid.length);
console.log("Failed transactions:", invalid.length);
console.log("Valid list:", valid);
console.log("Invalid list:", invalid);
