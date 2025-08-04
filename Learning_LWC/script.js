/************Arrow function***************************/

// Use case 1

function abc(){
    console.log("Hello")
}
abc()

const def = ()=>console.log("Hello again")
def()

// Use case 2

function sum(data1,data2){
    let sum = data1 + data2 + 10
    return sum
}
console.log(sum(10,5))

const add =(data1, data2)=>{
    let sum = data1 + data2 + 10
    return sum
}
console.log(add(10,5))

function sum2(data1,data2){
    return data1 + data2 + 10
}
console.log(sum2(10,5))

const sum3 =(data1, data2)=>data1 + data2 + 10
console.log(sum3(10,5))

// Use case 3: array method map
var arr = [1,2,3,4]
arr.map(item){
    return item * 2
}