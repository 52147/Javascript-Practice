// Increment Function within a Closure

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1


// Explanation:
// 1. Closure Creation:

// The createCounter function defines a private variable count.
// It returns an object with three methods: increment, decrement, and getCount.
// 2. Encapsulation:

// The count variable is not accessible directly from outside the createCounter function. It's only accessible and modifiable through the returned methods, demonstrating encapsulation.
// 3. Methods:

// increment: This method increases the value of count by 1 and returns the new value.
// decrement: This method decreases the value of count by 1 and returns the new value.
// getCount: This method simply returns the current value of count.
// This pattern is very useful for creating objects with private state and controlled access, which is a common need in various programming scenarios.


// Further Example with Additional Features:
// reset: Resets the count back to the initial value specified when creating the counter.
// setCount: Allows setting count to a specific value.
function createAdvancedCounter(initialValue = 0) {
    let count = initialValue;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        },
        reset: function() {
            count = initialValue;
            return count;
        },
        setCount: function(newCount) {
            count = newCount;
            return count;
        }
    };
}

const advancedCounter = createAdvancedCounter(10);

console.log(advancedCounter.increment()); // Output: 11
console.log(advancedCounter.decrement()); // Output: 10
console.log(advancedCounter.getCount());  // Output: 10
console.log(advancedCounter.reset());     // Output: 10
console.log(advancedCounter.setCount(25)); // Output: 25
console.log(advancedCounter.getCount());  // Output: 25


// Practical Use Case

function createTimer() {
    let startTime = null;
    let endTime = null;

    return {
        start: function() {
            startTime = Date.now();
            console.log("Timer started at " + startTime);
        },
        stop: function() {
            endTime = Date.now();
            console.log("Timer stopped at " + endTime);
        },
        getDuration: function() {
            if (startTime === null || endTime === null) {
                console.log("Timer has not been started and stopped properly.");
                return null;
            }
            return (endTime - startTime) / 1000; // Duration in seconds
        }
    };
}

const timer = createTimer();
timer.start();
setTimeout(() => {
    timer.stop();
    console.log("Duration: " + timer.getDuration() + " seconds");
}, 2000);

// Explanation
// 1. Private Variables:
// startTime and endTime are private to the createTimer function.
// 2. Methods Accessing Private State:
// The methods start, stop, and getDuration access and manipulate startTime and endTime.
// These methods form closures, capturing the scope of createTimer.
// 3. Encapsulation:
// The state (start and end times) is encapsulated within the returned object, and cannot be accessed or modified directly from outside.