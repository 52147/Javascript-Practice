// setTimeout, setInterval, clearTimeout, clearInterval
// These functions are used to execute code after a delay or repeatedly at intervals.

// setTimeout
const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// clearTimeout(timeoutId); // Uncomment to cancel the timeout

//   Example of Combining Concepts
// Combining promises with async/await, fetch, and setTimeout.

// This example uses fetch to get data, handles the response with async/await, and logs a message after a 2-second delay using setTimeout.

// Example:
async function fetchUserData() {
  console.log("Fetching user data...");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log(data); // Output: User data
  } catch (error) {
    console.error("Error:", error);
  }

  setTimeout(() => {
    console.log("Executed after fetch completes");
  }, 2000);
}

fetchUserData();
