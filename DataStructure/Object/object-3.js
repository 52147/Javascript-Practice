// Example: counting word occurrences in string

let text = "apple banana apple cherry banana apple"
let words = text.split(" ");

// create an object contain word and freq
// acc is an object used to contain each item freq, acc initial value is {}
let wordCount = words.reduce((acc, curr) => {
    acc[curr] = (acc[curr]|| 0) + 1; // if the curr is undefind in acc, give default value 0
    return acc; // return the acc object for the next iteration
}, {})
// console.log(wordCount)

// create a list of object display in word: word, count: freq
let wordArray = Object.keys(wordCount).map(key =>({word: key, count: wordCount[key]}))
console.log(wordArray)