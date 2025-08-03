/************Query Selector***************************/

// CSS Selectors that exist: element name, class name, id name

// querySelector() method: returns the first element in the document 
// that matches a specified CSS selector. The document is the html file in the DOM.
// Ex: document.querySelector(css_selector)
// Allows you to change that particular element in the DOM

// querySelectorAll() method: returns all elements in the document
// that matches a specified CSS selector
// Ex: document.querySelectorAll(css_selector)

// Run some code in JS by which I am able to fetch the first div element from the DOM:
let element = document.querySelector('div')
console.log(element) // Returns: <div>Hello everyone</div>
console.log(element.innerText) // Returns: Hello everyone
// Now I can modify this element in the DOM, by for instance applying some style:
element.style.color = "red" // The corresponding element in the DOM turned red

// Now using a class name as css_selector to fetch a particular element:
let el = document.querySelector('.abc')
console.log(el) // Returns: <h1 class="abc">Hi there</h1>

// Fetch a list of all div elements from the DOM:
let elementList = document.querySelectorAll('div')
console.log(elementList) 
// Returns the list of div elements in the form of a "node list":
// <div>Hello everyone</div>, <div>Hello LWC Developers</div>, <div>Hello Maarten</div>

// Convert the nodelist into an array, using the following method: Array.from(nodelist)
// and then loop through the array items to turn each element into green color.
Array.from(elementList).forEach(function(currentItem){
    currentItem.style.color="green" 
})
