import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["John","Jim", "Carl"]

    fetchDetailHandler(event){
        // Code to fetch the H1 element
        const elem = this.template.querySelector("h1")
        console.log(elem) // <h1>Hey, I am a heading</h1>
        console.log(elem.innerText) // Hey, I am a heading
        elem.style.border = "1px solid red"

        const userElements = this.template.querySelectorAll(".abc")
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.style.color = "red"
            item.setAttribute("title", item.innerText)
        })

        // lwc:dom="manual" demo
        const childElem = this.template.querySelector(".child")
        childElem.innerHTML = "<p>Hey, I am a child element</p>"
    }

}