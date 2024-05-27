// objects are collection of properties
// properties is key-value pair

// accessing properties
let person = {
    name: 'Alice',
    age:30
}
console.log(person.name)
console.log(person['age'])

// iterating over properties
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

// check property existence
console.log('name' in person)
console.log('address' in person)