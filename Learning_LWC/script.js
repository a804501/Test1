/************Spread Operator ***************************/

var arr = ["a", "b", "c"]
console.log(arr) // ['a', 'b', 'c']
console.log(arr[0]) // a
console.log(arr[1]) // b

var obj = {
    "name": "salesforce",
    "age" : 23,
    "full name" : "zero to hero"
}
console.log(obj.age) // 23
console.log(obj["full name"]) // zero to hero
obj.hobbies = "cricket"
console.log(obj) // {name: 'salesforce', age: 23, full name: 'zero to hero', hobbies: 'cricket'}

// Spread operator behaves differently in four different use cases.

// 1. Expanding of string, or "Convert string into a list of array"
let greeting = "Hello Everyone"
let charlist = [...greeting]
console.log(charlist) // ['H', 'e', 'l', 'l', 'o', ' ', 'E', 'v', 'e', 'r', 'y', 'o', 'n', 'e']

// 2. Combine two arrays or add value to array
let arr1 = ["amazon", "google"]
let arr2 = ["facebook", "instagram"]
let arr3 = [...arr1, ...arr2]
console.log(arr3) // ['amazon', 'google', 'facebook', 'instagram']
let arr4 = [...arr3, "maarten"]
console.log(arr4) // ['amazon', 'google', 'facebook', 'instagram', 'maarten']
let arr5 = ["maarten", ...arr4]
console.log(arr5) // ['maarten', 'amazon', 'google', 'facebook', 'instagram', 'maarten']

// 3. Combine two objects or add a value to an object
let obj1 = {name:"salesforce",age:23, date:"23/10/1990"}
let obj2 = {name:"facebook", age:55}
let obj3 = {...obj1, ...obj2}
console.log(obj3) // {name: 'facebook', age: 55, date: '23/10/1990'} Right side values overwrite leftside values.

// 4. Creating new shallow copy of Arrays and Objects
var arr10 =  ["x", "y", "z"]
arr10.push(20)
console.log(arr10) // ['x', 'y', 'z', 20]
var arr11 = arr10 // arr11 takes both value and reference of arr10
arr11.push("maarten")
console.log(arr10) // ['x', 'y', 'z', 20, 'maarten']
// How to avoid this...? Use the spread operator to create a shallow copy
var arr110 = ["x", "y", "z"]
var arr111 = [...arr110] // It creates a shallow copy
arr111.push("jan")
console.log(arr110) // ['x', 'y', 'z']
