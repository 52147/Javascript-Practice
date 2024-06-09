// Prototype Inheritance
// In JavaScript, every object has a prototype. Objects inherit properties and methods from their prototype.
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise
