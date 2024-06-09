// this Keyword
// The this keyword refers to the object from which the function was called.
// It allows methods to access properties of the same object.
const user = {
  name: "Debra",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet(); // Output: Hello, Debra
