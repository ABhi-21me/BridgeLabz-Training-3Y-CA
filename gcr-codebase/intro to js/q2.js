
// Q2 - Multi-Type Data Summary

let name = "Abhishek";
let age = 21;
let isStudent = true;
let subjects = ["JavaScript", "HTML", "CSS"];
let student = { name: "Abhishek", age: 21 };
let marks = null;
let address;

let data = [
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: student, Type: typeof student },
    { Label: "Marks", Value: marks, Type: typeof marks },
    { Label: "Address", Value: address, Type: typeof address }
];

console.table(data);

