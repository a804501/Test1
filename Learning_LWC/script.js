/************Events***************************/

function firstFunction(){
    console.log("Hurray")
}

// Use case 2
let btn = document.querySelector(".clk2")
btn.addEventListener("click", firstFunction)

// Use case 3
// Add an eventlistener on document level. It represents the entire webpage.
// We do this because we want to listen to the event: "changing the mouse position
// on the webpage".
// Upon this event, so each time you move the mouse, 
// we want to display a different random number on the position of the div tag with class "demo".
document.addEventListener("mousemove", handler)

function handler(){
    document.querySelector(".demo").innerHTML = Math.random()    
}

// Use case 4: As soon as we click a button, we want the event handler of use case 3 to be removed.
// This causes the mouse position changing event no longer to display the 
// random number on the div tag.
function removehandler(){
    document.removeEventListener("mousemove", handler)
}

// Use case 5: Custom event.
function callCustomMethod(){
    // Create a custom event

    // Custom event constructor with as params: 
    // param 1: custom event name "Hello" 
    // param 2: options with as one of the properties "detail", which allows you to pass the data,
    // like for instance an object.
    let event = new CustomEvent("hello",{
        detail:{name:"maarten"}
    })
    // Now I want to dispatch that custom event
    document.dispatchEvent(event)
}

// We want somebody to listen to that event. Who will be listening? Our document, with the 
// following code:
document.addEventListener("hello", handler2)

function handler2(data){
    console.log("hello event has been called. The following data was sent ", data.detail)
}
