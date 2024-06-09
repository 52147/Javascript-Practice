// Async/Await
// async and await make it easier to work with promises by allowing you to write asynchronous code that looks synchronous.

// Example:\

async function fetchData() {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });
    console.log(response); // Output: Data received
  } catch (error) {
    console.error(error);
  }
}

fetchData();
