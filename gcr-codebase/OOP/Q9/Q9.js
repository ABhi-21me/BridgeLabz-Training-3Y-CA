class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("Workout data cannot be empty");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(item => item.steps > 7000);
  }

  getAverageCalories() {
    return this.data.reduce((total, item) => total + item.calories, 0) / this.data.length;
  }

  getUserSummary() {
    return this.data.map(item => {
      return item.user + " walked " + item.steps + " steps and burned " + item.calories + " calories.";
    });
  }
}

let workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

try {
  let app = new FitnessAnalytics(workoutData);

  console.log("Active users:", app.getActiveUsers());
  console.log("Average calories:", app.getAverageCalories());
  console.log("User summaries:", app.getUserSummary());
} catch (err) {
  console.log("Error:", err.message);
}
