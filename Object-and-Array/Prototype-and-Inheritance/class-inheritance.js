// Class Syntax
// ES6 introduced the class syntax, which is syntactic sugar over JavaScript's existing prototype-based inheritance.
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Dog");
dog.speak(); // Output: Dog barks
