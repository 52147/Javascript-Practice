// Dynamic Imports
// ES6 modules also support dynamic imports using the import() function, which returns a promise. This can be useful for code-splitting and lazy-loading modules.

// Example of ES6 Dynamic Import:

// importing module: main.js

// main.js
document.getElementById('loadButton').addEventListener('click', () => {
    import('./math.js').then(module => {
      console.log(module.add(2, 3)); // Output: 5
      console.log(module.subtract(5, 3)); // Output: 2
    }).catch(error => {
      console.error('Error loading module:', error);
    });
  });
//   Summary
// CommonJS: Used primarily in Node.js, uses require and module.exports.
// ES6 Modules: Uses import and export syntax, with support for default and named exports, re-exporting, and dynamic imports.
// Named Exports: Export multiple values with specific names.
// Default Exports: Export a single value.
// Importing Named Exports: Use curly braces to import specific named exports.
// Importing Default Exports: Use any name to import the default export without curly braces.
// Importing All Exports: Use * to import all named exports under a single namespace.
// Re-exporting: Forward exports from one module to another.
// Dynamic Imports: Load modules asynchronously using the import() function.
