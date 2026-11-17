let products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
  { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 12 },
  { id: 3, name: "Chair", category: "Furniture", price: 3000, stock: 3 },
  { id: 4, name: "Table", category: "Furniture", price: 7000, stock: 8 },
  { id: 5, name: "Notebook", category: "Stationery", price: 50, stock: 25 }
];

function getLowStockProducts(list) {
  return list.filter(item => item.stock < 5);
}

function sortProductsByPrice(list) {
  return [...list].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(list) {
  return list.reduce((total, item) => total + item.price * item.stock, 0);
}

function groupByCategory(list) {
  return list.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});
}

console.log("Low stock:", getLowStockProducts(products));
console.log("Sorted by price:", sortProductsByPrice(products));
console.log("Inventory value:", calculateTotalInventoryValue(products));
console.log("Grouped products:", groupByCategory(products));
