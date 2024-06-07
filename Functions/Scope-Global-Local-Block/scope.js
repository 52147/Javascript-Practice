// Scope
// Scope determines the accessibility of variables and functions in different parts of your code.

// Global Scope
// Variables declared outside any function are in the global scope.
let globalVar = "I am global";

function checkGlobalScope() {
  console.log(globalVar); // Output: I am global
}

checkGlobalScope();
// Local Scope
// Variables declared within a function are in the local scope of that function.
function localScopeExample() {
  let localVar = "I am local";
  console.log(localVar); // Output: I am local
}

localScopeExample();
// console.log(localVar); // Error: localVar is not defined

//   Block Scope within Blocks (e.g., if Statements)
//   Variables declared with let or const inside a block (such as an if statement, loop, or any block of code enclosed in {}) are limited to that block's scope.
//    They cannot be accessed from outside the block.
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Output: I am block-scoped
}

// console.log(blockVar); // Error: blockVar is not defined
