// Callback Functions
// A callback function is a function passed as an argument to another function, to be invoked later.
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Debra" };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(`Received data: ${data.name}`);
}

fetchData(handleData); // Output: Received data: Debra
