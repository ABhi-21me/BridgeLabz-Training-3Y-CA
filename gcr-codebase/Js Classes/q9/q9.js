class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name: name, price: price, quantity: quantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        if (!/^(SAVE20|DISC10)$/.test(code)) {
            console.log("Invalid coupon code.");
            return this.getTotal();
        }

        let percent = code === "SAVE20" ? 20 : 10;
        return this.getTotal() - (this.getTotal() * percent / 100);
    }
}

let cart = new Cart();
cart.addItem("T-shirt", 500, 2);
cart.addItem("Cap", 200, 1);

console.log("Cart total: Rs. " + cart.getTotal());
console.log("After coupon: Rs. " + cart.applyCoupon("SAVE20"));
