/************Modules Import and Export***************************/

// Here we will write our re-usable vars and methods and from here we are going to export them
// to script.js 


// 1) Exporting during declaration of a var or a function

// exporting a variable when declaring it
export const PI = 3.14
// exporting a function when declaring it
export function add(a,b){
    console.log(a + b)
}


// 2) Exporting a list of vars and functions, previously declared

const a = "Alpha"
function substract(a,b){
    console.log(a-b)
}
export {a, substract} // Exporting a list of vars and functions, previously declared


// 3) Exporting, using an alias

const b_data = "Bravo"
function divide(a,b){
    console.log(a / b)
}
export {b_data as b, divide as div}

// 4) Export with default (only for 1 var or function)

export default function minus(a,b) {
    console.log(a-b)
}