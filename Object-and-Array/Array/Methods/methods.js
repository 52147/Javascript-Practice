// Methods
const arr = [1, 2, 3, 4, 5];

// push
// Adds one or more elements to the end of an array and returns the new length of the array.
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// pop
// Removes the last element from an array and returns that element.
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

// shift
// Removes the first element from an array and returns that element.
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

// unshift
// Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

// map
// Creates a new array with the results of calling a provided function on every element in the calling array.
const doubled = arr.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter
// Creates a new array with all elements that pass the test implemented by the provided function.
const evens = arr.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce
// Executes a reducer function on each element of the array, resulting in a single output value.
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// forEach
// Executes a provided function once for each array element.
arr.forEach((num) => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5

// find
// Returns the value of the first element in the array that satisfies the provided testing function.
const found = arr.find((num) => num > 3);
console.log(found); // Output: 4

// findIndex
// Returns the index of the first element in the array that satisfies the provided testing function.
const index = arr.findIndex((num) => num > 3);
console.log(index); // Output: 3
