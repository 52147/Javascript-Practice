// for: Loop for iterating with a known number of iterations.
// The for loop is used when the number of iterations is known beforehand. 
// It consists of three parts: initialization, condition, and increment/decrement.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while: Loop for iterating as long as a condition is true.
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// do...while: Loop that guarantees at least one iteration before condition check.
let j = 0;

do {
    console.log(j);
    j++;
} while (j < 5);

// for...in: Loop for iterating over object properties.
let obj = { name: "Alice", age: 30, city: "New York" };

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// for...of: Loop for iterating over iterable objects such as arrays, strings, NodeList objects, Map and Set.
// Array
let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value);
}
// String
let string = "hello";

for (let char of string) {
  console.log(char);
}
// Output: h e l l o
// NodeList
// Assuming you have a NodeList from a document query
let nodeList = document.querySelectorAll('div');

for (let node of nodeList) {
  console.log(node);
}
// Output: Each div element in the document
// Map
let map = new Map();
map.set('a', 1);
map.set('b', 2);

for (let [key, value] of map) {
  console.log(key, value);
}
// Output: a 1
//         b 2


// Comparison with for...in
// The for...in loop iterates over enumerable properties of an object, including inherited properties, while for...of iterates over the values of an iterable object.
// Use for...of for arrays and other iterable objects where you need to access the values directly.
// Use for...in for objects where you need to access property keys.