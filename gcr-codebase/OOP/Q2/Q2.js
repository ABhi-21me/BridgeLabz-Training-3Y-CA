let menu = {
  Pizza: 200,
  Burger: 100,
  Pasta: 150,
  Sandwich: 80
};

function calculateBill(orderItems) {
  let prices = orderItems.map(item => {
    if (menu[item] === undefined) {
      throw new Error(item + " is not available in the menu");
    }
    return menu[item];
  });

  return prices.reduce((total, price) => total + price, 0);
}

try {
  let total = calculateBill(["Pizza", "Burger", "Pasta"]);
  console.log("Total bill: Rs.", total);
} catch (err) {
  console.log("Order error:", err.message);
}

try {
  let total = calculateBill(["Pizza", "Sushi"]);
  console.log("Total bill: Rs.", total);
} catch (err) {
  console.log("Order error:", err.message);
}
