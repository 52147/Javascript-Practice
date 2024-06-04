// Function Factories

// A Function Factory is a function that returns other functions.
// This technique is useful for creating functions that are pre-configured in a specific way. It allows you to generate multiple functions with customized behavior without duplicating code.
// They leverage closures to maintain state and configuration,
// enabling you to generate functions with specific behavior dynamically.
// This pattern is useful for scenarios like creating event handlers, configuring middleware, or generating repetitive but customized operations.

// Basic Example of a Function Factory
function createGreeting(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

const sayHello = createGreeting("Hello");
const sayGoodbye = createGreeting("Goodbye");

console.log(sayHello("Alice")); // Output: Hello, Alice!
console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob!

// In this example:
// createGreeting is the function factory that takes a greeting string as an argument and returns a new function.
// The returned function takes a name as an argument and uses the greeting provided to the factory function.
// sayHello and sayGoodbye are customized greeting functions created by the factory function.


//Function Factory with Configuration
// createLogger is a function factory that takes a configuration object as an argument and returns a logging function.
// The logging function behavior changes based on the showTimestamp configuration.
function createLogger(config) {
    return function(message) {
        const timestamp = new Date().toISOString();
        if (config.showTimestamp) {
            console.log(`[${timestamp}] ${message}`);
        } else {
            console.log(message);
        }
    };
}

const loggerWithTimestamp = createLogger({ showTimestamp: true });
const loggerWithoutTimestamp = createLogger({ showTimestamp: false });

loggerWithTimestamp("This is a log message."); // Output: [2024-06-02T12:34:56.789Z] This is a log message.
loggerWithoutTimestamp("This is another log message."); // Output: This is another log message.



// Advantages:
// 1. Code Reusability:
// promote DRY (Don't Repeat Yourself) principles 
// by avoiding the need to write similar functions multiple times.
// 2. Customization:
// allow you to create customized functions with specific behavior based on the parameters passed to the factory.
// 3. Encapsulation:
// Variables defined in the factory function are encapsulated and not directly accessible from outside, 
// providing a level of security and preventing accidental modifications.
