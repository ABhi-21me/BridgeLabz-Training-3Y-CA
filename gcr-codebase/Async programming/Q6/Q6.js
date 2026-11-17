// Q6: Fetch and Display Product Data

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const products = await response.json();

    products.forEach(product => {
      console.log("Product:", product.title);
      console.log("Price: $" + product.price);
      console.log("Image:", product.image);
      console.log("----------------------");

      // Bonus: Add a product card when this file runs in a browser.
      if (typeof document !== "undefined") {
        const card = document.createElement("div");
        card.className = "product";

        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = "$" + product.price;

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.width = 120;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        document.body.appendChild(card);
      }
    });
  } catch (error) {
    console.log("Failed to load products. Please try again.");
  }
}

getProducts();
