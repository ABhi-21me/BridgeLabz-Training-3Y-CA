
function design(callback) {
  setTimeout(() => {
    console.log("Design completed");
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(() => {
    console.log("Build completed");
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(() => {
    console.log("Test completed");
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(() => {
    console.log("Deploy completed");
    callback();
  }, 1000);
}

function celebrate(callback) {
  setTimeout(() => {
    console.log("Celebrate!");
    callback();
  }, 1000);
}


function runWithCallbacks() {
  design(() => {
    build(() => {
      test(() => {
        deploy(() => {
          celebrate(() => {
            console.log("Callback pipeline finished.");
          });
        });
      });
    });
  });
}


function stage(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name + " completed");
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  await stage("Design");
  await stage("Build");
  await stage("Test");
  await stage("Deploy");
  await stage("Celebrate");
  console.log("Async/await pipeline finished.");
}

runWithAsyncAwait();

