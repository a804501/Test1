/************Modules Import and Export***************************/

import minus, {PI, add, a, substract, b, div} from './utils.js' // Now these variables and methods 
// have become available in the current file.
// Alternative notation: import all exported vars and methods from a particular file
// import * as UTILS from './utils.js'
// then I have to call the vars/methods like this: console.log(UTILS.PI)

console.log(PI)
console.log(add(2,3))
console.log(a)
console.log(substract(5,3))
console.log(b)
console.log(div(10,2))
console.log(minus(10,9))