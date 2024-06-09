// Constructor Function
// A constructor function allows you to create multiple instances of an object with similar properties.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Debra", 30);
