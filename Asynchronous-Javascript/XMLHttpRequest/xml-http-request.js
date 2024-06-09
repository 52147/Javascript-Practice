// XMLHttpRequest
// XMLHttpRequest is a legacy API for making HTTP requests.

// Example:

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText)); // Output: User data
  } else {
    console.error("Error:", xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Network error");
};
xhr.send();
