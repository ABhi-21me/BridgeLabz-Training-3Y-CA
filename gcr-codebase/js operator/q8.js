const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce(function(sum, product) {
    return sum + product.price;
}, 0);

let finalTotal = 0;

for (let i = 0; i < cart.length; i++) {
    let price = cart[i].price;

    if (cart[i].category === "electronics") {
        price = price - (price * 0.10);
    } else if (cart[i].category === "fashion") {
        price = price - (price * 0.05);
    }

    finalTotal = finalTotal + price;
}

if (total > 50000) {
    finalTotal = finalTotal - (finalTotal * 0.05);
}

console.log("Cart Total: Rs. " + total);
console.log("Final Total: Rs. " + finalTotal);