

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3;

      if (apiFailed) {
        reject("Could not fetch bugs from the API.");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bug list:");
    console.table(bugs);
  })
  .catch(error => {
    console.log("Error:", error);
  });
