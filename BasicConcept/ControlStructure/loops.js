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

// for...of: Loop for iterating over iterable objects such as arrays, strings, and NodeList objects.
let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value);
}
