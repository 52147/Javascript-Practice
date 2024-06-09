// Rest Operator
// The rest operator allows us to represent an indefinite number of arguments as an array.
const arr = [1, 2, 3, 4, 5];

function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
