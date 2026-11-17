

function serverResponse(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(serverName + " failed to respond.");
      } else {
        resolve(serverName + " responded.");
      }
    }, delay);
  });
}

const serverA = serverResponse("Server A", 2000);
const serverB = serverResponse("Server B", 3000);

Promise.all([serverA, serverB])
  .then(() => {
    console.log("Deployment completed for all servers");
  })
  .catch(error => {
    console.log("Deployment error:", error);
  });


Promise.race([
  serverResponse("Server A", 2000),
  serverResponse("Server B", 3000)
])
  .then(result => {
    console.log("Fastest response:", result);
  })
  .catch(error => {
    console.log("Race error:", error);
  });
