/************setTimeout vs setInterval ***************************/

// setTimeout
let timerId = window.setTimeout(function(){
    console.log("Hello")
}, 2000)
clearTimeout(timerId)

// setInterval
let intervalId = window.setInterval(function(){
    console.log("Hello")
}, 1000)
clearInterval(intervalId)