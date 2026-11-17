
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function boilWater() {
  return new Promise(async (resolve, reject) => {
    await wait(1500);
    if (Math.random() < 0.2) {
      reject("Water could not be boiled.");
    } else {
      console.log("Water boiled.");
      resolve();
    }
  });
}

function brewCoffee() {
  return new Promise(async (resolve, reject) => {
    await wait(1200);
    if (Math.random() < 0.2) {
      reject("Coffee brewing failed.");
    } else {
      console.log("Coffee brewed.");
      resolve();
    }
  });
}

function pourCoffee() {
  return new Promise(async (resolve, reject) => {
    await wait(1000);
    if (Math.random() < 0.2) {
      reject("Could not pour the coffee.");
    } else {
      console.log("Coffee poured into the cup.");
      resolve();
    }
  });
}

boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => console.log("Coffee ready for the team!"))
  .catch(error => console.log("Coffee process failed:", error));
