// map
// there argument in the call back function
// 1. current element
// 2. index
// 3. array

// using map to get index

let arr = ['apple', 'banana', 'cherry']

let result = arr.map((element, index) =>{
    return {element: element, index: index}
})

console.log(result)