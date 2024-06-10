// Modules in JavaScript
// Modules in JavaScript allow you to break up your code into smaller, reusable pieces. There are two main module systems: CommonJS and ES6 modules.

// CommonJS
// CommonJS is a module system used primarily in Node.js. It uses require to import modules and module.exports to export them.

// Example of CommonJS:

// exporting module: math.js

// math.js
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  module.exports = {
    add,
    subtract
  };
  