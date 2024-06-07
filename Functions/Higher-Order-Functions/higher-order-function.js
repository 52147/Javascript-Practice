// Higher-Order Functions
// Higher-order functions are functions that take other functions as arguments or return functions.
function repeat(fn, times) {
  return function (value) {
    for (let i = 0; i < times; i++) {
      fn(value);
    }
  };
}

const logHello = repeat(console.log, 3);
logHello("Hello!"); // Output: Hello! (repeated 3 times)
