// Callbacks
// A callback is a function passed into another function as an argument to be executed later.

// Example:
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Debra" };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(`Received data: ${data.name}`);
}

fetchData(handleData); // Output after 1 second: Received data: Debra
