/************Destructuring***************************/
// Destructuring means: extracting some data


// Aray destructuring

let arr = ["amazon", "google"]
let [company1, company2] = arr // Aray destructuring
console.log(company1)
console.log(company2)


// Object destructuring

let options = {
    title:"zero to hero",
    age:23,
    type:"CRM"
}
let {title, age, type} = options // Object destructuring
console.log(title)
console.log(age)
console.log(type)
