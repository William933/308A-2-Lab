// Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Guess this worked!");
    }, 1000);
  });
  // Add some then() methods to handle additional tasks.
  myPromise
    .then((x) => {
      console.log(x + " Again?");
      //
      const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("New Guess this worked!");
        }, 1000);
      });
      newPromise
        .then((y) => {
          console.log(y + " " + x);
        })
        .catch((err) => {
          console.log(err);
        });
      //
      return x;
    })
    .then((x) => {
      console.log(x + " Third time!");
      return x;
    })
    .then((x) => console.log(x + " Promises are cool."))
    .catch((err) => {
      console.error(err);
    });
// Initial, do this, no matter what 
// Initial, something failed,
    new Promise((resolve, reject) => {
        console.log("Initial");
      
        resolve();
      })
        .then(() => {
          throw new Error("Something failed");
      
          console.log("Do this");
        })
        .catch(() => {
          console.error("Do that");
        })
        .then(() => {
          console.log("Do this, no matter what happened before");
        });