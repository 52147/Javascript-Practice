// Fetch API
// The Fetch API provides a way to make network requests similar to XMLHttpRequest. It returns a promise.

// Example:
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => console.log(data)) // Output: User data
  .catch((error) => console.error("Error:", error));
