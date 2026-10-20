let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");

let text = feedback.toLowerCase();

console.log("Word Count: " + words.length);

if (!text.includes("bad") && !text.includes("poor")) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}