// clearInterval
const intervalId = setInterval(() => {
  console.log("This will run only once");
  clearInterval(intervalId); // Cancels the interval after the first run
}, 2000);
