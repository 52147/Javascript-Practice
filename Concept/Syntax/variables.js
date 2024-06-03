// var
// Function-scoped or globally-scoped.
// Can be re-declared and updated.
var x = 5;
var x = 10; // Re-declaration is allowed
x = 15;    // Updating is allowed

// let
// Block-scoped.
// Cannot be re-declared within the same scope but can be updated.
let y = 20;
y = 25;    // Updating is allowed
// let y = 30; // Error: Identifier 'y' has already been declared in the same scope

// const
// Block-scoped.
// Cannot be re-declared or updated (immutable for primitive data types).
const z = 35;
// z = 40; // Error: Assignment to constant variable
// const z = 45; // Error: Identifier 'z' has already been declared
