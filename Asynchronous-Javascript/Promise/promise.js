// Promises
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Example:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

promise
  .then((response) => {
    console.log(response); // Output: Data received
  })
  .catch((error) => {
    console.error(error);
  });
