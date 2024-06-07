// Function Hoisting
// Function declarations are hoisted completely, meaning you can call the function before its declaration in the code.

// Function hoisting example
console.log(greet("Debra")); // Output: Hello, Debra!

function greet(name) {
  return `Hello, ${name}!`;
}

// Variable Hoisting
// Variables declared with var are hoisted to the top of their function or global scope but are initialized with undefined. Variables declared with let and const are also hoisted but are not initialized. They are in a "temporal dead zone" until the declaration is encountered in the code.

// Hoisting with var

console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// In this example, the declaration of hoistedVar is hoisted to the top, but its assignment remains in place. Therefore, hoistedVar is undefined when first logged.

// Hoisting with let and const
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am hoisted";
// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am also hoisted";
// In this example, attempting to access hoistedLet or hoistedConst before their declarations results in a ReferenceError because they are in the "temporal dead zone."

// Key Points
// Function Declarations: Fully hoisted, can be called before they are defined.
// Variable Declarations with var: Hoisted but initialized to undefined.
// Variable Declarations with let and const: Hoisted but not initialized, leading to a temporal dead zone.
