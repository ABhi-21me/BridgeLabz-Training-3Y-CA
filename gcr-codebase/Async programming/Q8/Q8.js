// Q8: Order Processing Retry

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject("Order submission failed");
      } else {
        resolve("Order submitted");
      }
    }, 700);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log("Attempt " + attempt + ": Success");
      return;
    } catch (error) {
      console.log("Attempt " + attempt + ": Failed");
    }
  }

  throw new Error("Order could not be processed");
}

processOrder()
  .catch(error => {
    console.log(error.message);
  });
