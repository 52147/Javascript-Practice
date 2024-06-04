// Closure:
// function is defined inside another function and retains access to the outer function's scope.
// allow functions to have "private" variables.
// useful for function factories, maintaining state, and ensuring proper scope in asynchronous code.


// basic example
function outerFunction() {
    let outerVariable = 'I am from the outer scope';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: I am from the outer scope
