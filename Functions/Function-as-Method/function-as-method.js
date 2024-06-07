// Function as a Method
// A function can also be defined as a method of an object.
const obj = {
  methodName: function (parameters) {
    // function body
    // code to be executed
  },
};
const person = {
  name: "Debra",
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

person.greet(); // Output: Hello, Debra!
