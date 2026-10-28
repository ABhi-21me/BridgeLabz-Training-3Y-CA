class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    discount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    details() {
        return `${this.name} (${this.category}) - Rs. ${this.price.toFixed(2)}`;
    }
}

let products = [
    new Product(1, "Keyboard", 1500, "Accessories"),
    new Product(2, "Mouse", 700, "Accessories"),
    new Product(3, "Headphones", 2200, "Audio")
];

products[0].discount(10);

let costly = products.filter(p => p.price > 1000);
costly.forEach(p => console.log(p.details()));
