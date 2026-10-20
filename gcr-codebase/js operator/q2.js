let name = " wireless headphones PRO ";

name = name.trim().toLowerCase();

name = name.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

name = name.replace("Pro", "Pro Edition");

console.log("Product Name: " + name);
console.log("Length: " + name.length);