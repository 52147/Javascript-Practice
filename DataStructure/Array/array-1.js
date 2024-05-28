// array: store and manipulate collections of elements

// array methods

// 1. create array
let arr = []; // empty array
let numbers = [1, 2, 3, 4, 5]; // array with elements

// 2. access elements
console.log(numbers[0]);
console.log(numbers[4]);

// 3. adding and removing elements

// 3.1 push : add one or more elements to the end of the array
numbers.push(6);
// 3.2 pop: remove the last element and returns it
let lastElement = numbers.pop();
// 3.3 shift: remove the first element and return it
let firstElement = numbers.shift();
// 3.4 unshift: add one or more elements to the begining 
numbers.unshift(0);

// 4. iterating over arrays

// forEach: execute call back function for each element
numbers.forEach((n) => console.log(n));

// 5.transforming Array

// 5.1 map: create a new array with the result of calling of call back fundion on each element
let doubled = numbers.map((n) => n * 2);

// 5.2 filter: create new array with elements that pass call back function
let evnetNumber = numbers.filter((n) => n % 2 === 0 )

// 5.3 reduce: use callback function to aggregate each element to the single value
let sum = numbers.reduce((acc, num) => acc + num, 0)

// 6. finding elements:

// 6.1 find: return first element in the array that satifies the callback function
let found = numbers.find((n) => n > 2)
// 6.2 findIndex: return the index of first element in the array that satisfies the callback function
let index = numbers.findIndex((n) => n > 2)