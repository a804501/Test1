/************Object/JSON Operations***************************/

// We create an object with a number of properties
let obj = {
    name:"Salesforce",
    age:23,
    dob:'23/10/1990'  
}

// Object operations

// Extract all the keys from an object. The keys are the properties of the object.
console.log(Object.keys(obj)) // Returns an array with all keys: ['name', 'age', 'dob']

// Extract all the values from an object.
console.log(Object.values(obj)) // Returns an array with all values: ['Salesforce', 23, '23/10/1990']

// JSON operations

// Convert an object into a string format = serialization
let str = JSON.stringify(obj)
console.log(str) 
// returns the object as a string: {"name":"Salesforce","age":23,"dob":"23/10/1990"}

// Convert the string of an object to an object = deserialization
console.log(JSON.parse(str))
// Deserializes the string into an object: {name: 'Salesforce', age: 23, dob: '23/10/1990'}