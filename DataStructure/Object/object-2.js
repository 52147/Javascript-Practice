// objects methods

// 1. Object.keys
// return array of object property name, in the same order we get in the loop
const person = {
    name: 'Alice',
    age: 30,
    city:'New York'
};
const keys = Object.keys(person);
console.log(keys);

// 2. Object.values
// return object property value, in the same order by for in loop
const values = Object.values(person);
console.log(values);

// 3. Object.entries
// return object string keyed and value pair
const entries = Object.entries(person);
console.log(entries)

// 4. hasOwnProperty
// return boolean indicating whether the object has the specified property
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('gender'));


// 5. Practical Example: filtering object properties
const person2 = {
    name: 'Alice',
    age:30,
    city: 'New York',
    profession: 'Engineer'
}

// extract keys and values
const keys2 = Object.keys(person2);
const values2 = Object.values(person2);

// Filter property key where vaule is string
const stringValue = keys2.filter((k) => typeof person2[k] === 'string')
console.log(stringValue)

// check if the object has a specific property
if(person2.hasOwnProperty('age')){
    console.log('Age is present')
}else{
    console.log('Age is not present')
}