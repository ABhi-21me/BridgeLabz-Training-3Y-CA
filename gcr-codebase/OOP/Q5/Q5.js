class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance < 0) {
      throw new Error("Please enter a valid trip distance");
    }

    return this.distance * 12;
  }
}

let driver = new Driver("Rahul", 4.8, "Swift");
console.log(driver.name, driver.vehicle);

try {
  let trip = new Trip("Kosi", "Mathura", 30);
  console.log("Trip fare: Rs.", trip.calculateFare());
} catch (err) {
  console.log(err.message);
}

try {
  let trip2 = new Trip("Kosi", "Delhi", -10);
  console.log("Trip fare: Rs.", trip2.calculateFare());
} catch (err) {
  console.log("Trip error:", err.message);
}
