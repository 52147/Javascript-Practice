// ### Function Expressions with `const`, `let`, and `var`

// In JavaScript, function expressions can be assigned to variables declared with `const`, `let`, or `var`. These expressions create anonymous functions or named functions and store them in the variable.

// #### Using `const`
// `const` declares a constant variable, meaning the variable cannot be reassigned after its initial assignment. However, the function itself can still modify objects or arrays it refers to.

// **Example with Anonymous Function**

const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Debra')); // Output: Hello, Debra!


// **Example with Named Function**
// Naming the function inside the expression is useful for debugging.

const greet = function greeting(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Debra')); // Output: Hello, Debra!


// #### Using `let`
// `let` declares a block-scoped variable. Similar to `const`, `let` can be used for function expressions but allows reassignment of the variable.

// **Example with Anonymous Function**

let greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Debra')); // Output: Hello, Debra!

greet = function(name) {
  return `Hi, ${name}!`;
};

console.log(greet('Debra')); // Output: Hi, Debra!


// **Example with Named Function**

let greet = function greeting(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Debra')); // Output: Hello, Debra!

greet = function greeting(name) {
  return `Hi, ${name}!`;
};

console.log(greet('Debra')); // Output: Hi, Debra!


// #### Using `var`
// `var` declares a function-scoped variable. Variables declared with `var` are hoisted to the top of their containing function or global scope, and they can be reassigned.

// **Example with Anonymous Function**

var greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Debra')); // Output: Hello, Debra!

greet = function(name) {
  return `Hi, ${name}!`;
};

console.log(greet('Debra')); // Output: Hi, Debra!


// **Example with Named Function**

var greet = function greeting(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Debra')); // Output: Hello, Debra!

greet = function greeting(name) {
  return `Hi, ${name}!`;
};

console.log(greet('Debra')); // Output: Hi, Debra!


// ### Key Differences

// - **Scope**: 
//   - `const` and `let` are block-scoped, meaning they are only accessible within the block they are declared.
//   - `var` is function-scoped, meaning it is accessible throughout the entire function it is declared in.
// - **Reassignment**: 
//   - `const` cannot be reassigned after its initial declaration.
//   - `let` and `var` can be reassigned.
// - **Hoisting**:
//   - Variables declared with `var` are hoisted and initialized with `undefined`, so they can be referenced before their declaration but will return `undefined` until assigned.
//   - Variables declared with `let` and `const` are hoisted but not initialized, leading to a "temporal dead zone" until their declaration is encountered in the code.

// Using `const` is generally preferred for function expressions when you do not intend to reassign the variable, as it provides better guarantees about the immutability of the reference. Use `let` if you need to reassign the function. Avoid `var` due to its function-scoping and hoisting behavior, which can lead to bugs and unintended side effects.