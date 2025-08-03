/************Array methods***************************/

// syntax:
// arr.methodName(function(currentItem, index, actualArray){ // Method can take these 3 input params
// })

let arr = [2, 3, 5, 7, 9, 10]


// map() loops over the array and returns a new array, based on a transformation
// of each array element (ex: double the value of each element), defined in a function. 

console.log("map()***********************************")

let newArray = arr.map(function(currentItem, index, array){
    console.log(`currentItem: ${currentItem}, index: ${index}, array: ${array}`)
    return currentItem * 2
})
console.log(newArray) // returns [4, 6, 10, 14, 18, 20]

// Note: no need to use each param:
arr.map(function(currentItem){
    console.log(`currentItem: ${currentItem}`)
    return currentItem * 2
})


// filter() returns a new array with all elements that satisfy the condition, 
// specified in the function.

console.log("filter()***********************************")

let filteredValues = arr.filter(function(currentItem){
    return currentItem > 5
})
console.log(filteredValues)


// every() returns true if every element in the array satisfies the condition,
// specified in the condition

console.log("every()***********************************")

let age = [32, 33, 18, 40]

let isAllAdult = age.every(function(currentItem){
    return currentItem >= 18
})
console.log(isAllAdult) // returns false


// some() returns true if at least one element in the array satisfies the condition.

console.log("some()***********************************")

let ageList = [32, 33, 18, 40]

let isAdult = ageList.some(function(currentItem){
    return currentItem > 32
})
console.log(isAdult)


// sort() sorts the elements of the array

console.log("sort()***********************************")

console.log("Alphabetic sorting")
let names = ["Maarten", "John", "Smith"]
console.log(names.sort()) // returns ['John', 'Maarten', 'Smith']

console.log("Number sorting")
let points = [10, 39, 12, 80, 54]
let sortedPoints = points.sort(function(a,b){
    return a - b // sorts ascending 
})
console.log(sortedPoints) // returns [10, 12, 39, 54, 80]


// reduce() reduces the array to a single value.
// Takes as input a function and an initial value.

console.log("reduce()***********************************")

// Syntax:
// array.reduce(function(total, currentValue, index, array){

// }, initialValue)

let numbers = [12, 78, 30]
let sum = numbers.reduce(function(total, currentItem){
    return total + currentItem
}, 0)
console.log(sum) // returns 120


// forEach() executes, for each element in the array, the operation specified in the function.
// It doesn't return a value.

console.log("forEach()***********************************")

numbers.forEach(function(currentItem){
    console.log(currentItem)
})
