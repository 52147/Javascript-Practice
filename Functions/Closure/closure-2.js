// Use Cases for Closures

//  1. Data Privacy
// count is private to the createCounter function and cannot be accessed directly from outside.
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1

// 2. Function Factories
// Closures can be used to create funcIn this example, createAdder returns a new function that adds x to its argument y. 
// Each time createAdder is called, a new closure is created.
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25


// 3. Maintaining State
// createState returns an object with methods to get and set the state, maintaining the state between calls.

function createState(initialValue) {
    let state = initialValue;

    return {
        getState: function() {
            return state;
        },
        setState: function(newState) {
            state = newState;
        }
    };
}

const stateManager = createState(10);
console.log(stateManager.getState()); // Output: 10
stateManager.setState(20);
console.log(stateManager.getState()); // Output: 20


// 4. Iterating with Proper Scope
// Closures can help when working with asynchronous code inside loops, ensuring each iteration has the correct scope.
for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i); // Output: 0, 1, 2
        }, 1000);
    })(i);
}

// Practical Example
function buildSandwich(base) {
    return function(addition) {
        return base + ' with ' + addition;
    };
}

const mySandwich = buildSandwich('Turkey');
console.log(mySandwich('lettuce')); // Output: Turkey with lettuce
console.log(mySandwich('tomato')); // Output: Turkey with tomato





